import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../category/category.service';
import { ManufacturerService } from '../manufacturer/manufacturer.service';
import { UnitService } from '../unit/unit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { LoadingService } from '../../loadingService/loading.service';
import { NotificationService } from '../../loadingService/notification.service';
declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categories: any[];
  manufacturers: any[];
  units: any[];
  category: any = {};
  unit: any = {};
  manufacturer: any = {};
  product: any = {};
  routerSubcription: any = {};
  id: any = {};
  constructor(private manufacturerService: ManufacturerService, private catelogyService: CategoryService,
    private unitService: UnitService, private activatedRoute: ActivatedRoute, private router: Router
    , private productService: ProductService, private loadingService: LoadingService, 
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.routerSubcription = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id == 0) {
        this.product = {};
      }
      this.catelogyService.getCategorys().then((catelogies: any) => {
        this.categories = catelogies;
        if (this.id == 0) {
          this.product.CategoryId = this.categories[0].Id;
        }
      });
      this.manufacturerService.getManufacturers().then((manufacturers: any) => {
        this.manufacturers = manufacturers;
        if (this.id == 0) {
          this.product.ManufacturerId = this.manufacturers[0].Id;
        }
      });
      this.unitService.getUnits().then((units: any) => {
        this.units = units;
        if (this.id == 0) {
          this.product.UnitId = this.units[0].Id;
        }
      });
      if (this.id > 0) {
        this.productService.getProduct(this.id).then(res => {
          this.product = res;
        }).catch(err => {
          console.log(err);
        })
      }
    });
  }
  ngOnDestroy() {
    this.routerSubcription.unsubcribes;
  }
  save(user) {
    this.loadingService.start();
    this.productService.saveProduct(this.product).then((res: any) => {
      if (this.id === 0) this.router.navigate(["/main/product", res.Id]);
      this.loadingService.stop();
      this.notificationService.success('save success');
    }).catch(err => {
      this.loadingService.stop();
      this.notificationService.error('save failed!');
    })
  }

}


