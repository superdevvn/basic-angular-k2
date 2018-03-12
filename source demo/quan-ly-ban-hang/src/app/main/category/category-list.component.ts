import { Component } from '@angular/core';
import { Category } from './shared/category.model';
import { CategoryService } from './service/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as jquery from 'jquery';


@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html',
})
export class CategoryListComponent {

    constructor(private categoryService: CategoryService, private router: Router) {

    }

    categories: Category[] = [];


    ngOnInit() {
        this.categoryService.getList().then((res: Category[]) => {
            this.categories = res;
        }).catch(err => {
            console.log(err);
        })
    }

    detail(category: Category) {
        this.router.navigate(['/main/category-detail', category.Id]);
    }


}
