import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CategoryService } from './category/category.service';
import { ProductService } from './product/product.service';
declare var $: any;
declare var Core: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorys: any[];
  constructor(private categoryService: CategoryService, private productService: ProductService) { }



  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      Core.init();
    }, 1000);


  }


}
