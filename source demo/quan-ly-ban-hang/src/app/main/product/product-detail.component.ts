import { Component } from '@angular/core';
import { Product } from './shared/product.model';
import { ProductService } from './service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ManufacturerService } from './../manufaturer/service/manufacturer.service';
import { CategoryService } from './../category/service/category.service';
import { UnitService } from './../unit/service/unit.service';
import { Manufacturer } from '../manufaturer/shared/manufacturer.model';
import { Unit } from './../unit/shared/unit.model';
import { Category } from './../category/shared/category.model';
import * as jquery from 'jquery';



@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
})

export class ProductDetailComponent {

    product: Product = new Product();
    id: number = 0;
    routerSubcription: any;
    title = '';
    manufacturers: Manufacturer[] = [];
    units: Unit[] = [];
    categories: Category[] = [];




    constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute,
        private manufacturerService: ManufacturerService, private unitService: UnitService,
        private categoryService: CategoryService) {

    }


    ngOnInit() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.unitService.getList().then((res: Unit[]) => {
                this.units = res;
                if (this.id == 0) {
                    this.product.UnitId = this.units[0].Id;
                }
            });
            this.categoryService.getList().then((res: Category[]) => {
                this.categories = res;
                if (this.id == 0) {
                    this.product.CategoryId = this.categories[0].Id;
                }
            });
            this.manufacturerService.getList().then((res: Manufacturer[]) => {
                this.manufacturers = res;
                if (this.id == 0) {
                    this.product.ManufacturerId = this.manufacturers[0].Id;
                }
            });
            if (this.id == 0) {
                this.title = "You are signing up the New Product";
            }
            if (this.id > 0) {
                this.productService.getProduct(this.id).then((res: Product) => {
                    this.product = res;
                    console.log(this.product);
                    this.title = "You are editing the information";
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }

    save() {
        this.productService.saveProduct(this.product).then((res: Product) => {
            this.product = res;
        }).catch(err => {
            console.log(err);
        })
    }

    back() {
        this.router.navigate(['/main/product-list']);
    }

    onclick() {
        jquery('#successTable').css('opacity', 1);
        jquery('#successTable').css('transition', '1s');
        setTimeout(() => {
            jquery('#successTable').css('opacity', 0);
            jquery('#successTable').css('transition', '1s');
        }, 4000);
    }

}