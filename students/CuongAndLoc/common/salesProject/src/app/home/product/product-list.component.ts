import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl:'./product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[];
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit() {
    this.productService.getProducts().then((products: any) => {
      this.products = products;
    });
  }
  detail(product) {
    this.router.navigate(["/main/product", product.Id]);
  }
  create(){
    this.router.navigate(["/main/product", 0]);
  }
}
