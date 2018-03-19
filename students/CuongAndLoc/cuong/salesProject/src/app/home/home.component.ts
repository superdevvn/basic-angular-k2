import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CategoryService } from './category/category.service';
declare var $: any;
declare var Core: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  categorys: any[];
  constructor(private categoryService: CategoryService) { }


  ngOnInit() {
    this.categoryService.getCategorys().then((categorys: any) => {
      this.categorys = categorys;
      console.log(this.categorys);
    });
  }
  ngAfterViewInit() {
    setTimeout(()=>{
      Core.init();
    }, 1000);
  
  }


}
