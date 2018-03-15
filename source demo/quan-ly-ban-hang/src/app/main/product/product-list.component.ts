import { Component } from '@angular/core';
import { Product } from './shared/product.model';
import { ProductService } from './service/product.service';
import { Router } from '@angular/router';



@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
})

export class ProductListComponent {

    products: Product[] = [];

    constructor(private productService: ProductService, private router: Router) {

    }

    ngOnInit() {
        this.productService.getList().then((res: Product[]) => {
            this.products = res;
            console.log(this.products);
        }).catch(err => {
            console.log(err);
        })
    }

    detail(product: Product) {
        this.router.navigate([`/main/product-detail/${product.Id}`]);
    }

}