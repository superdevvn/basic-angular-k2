import { Component } from '@angular/core';
import { Category } from './shared/category.model';
import { CategoryService } from './service/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as jquery from 'jquery';


@Component({
    selector: 'category-detail',
    templateUrl: './category-detail.component.html',
})
export class CategoryDetailComponent {

    category: Category = new Category();
    id: number = 0;
    routerSubcription: any;
    title = '';
    categories: Category[] = [];

    constructor(private router: Router, private route: ActivatedRoute, private categoryService: CategoryService) {

    }


    ngOnInit() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.categoryService.getList().then((res: Category[]) => {
                this.categories = res;
                console.log('mảng ' + this.categories);
                if (this.id == 0) {
                    this.category.ParentID = this.categories[0].Id;
                }
            });
            if (this.id == 0) {
                this.title = "You are signing up the new Category";
            } else {
                this.categoryService.getCategory(this.id).then((res: Category) => {
                    this.category = res;
                    this.title = "You are editing up the infomation";
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }

    save() {
        this.categoryService.saveCategory(this.category).then((res: Category) => {
            this.category = res;
        }).catch(err => {
            console.log(err);
        })
    }

    back() {
        this.router.navigate(['/main/category-list']);
    }


    onclick() {
        jquery('#successTable').css('opacity', 1);
        jquery('#successTable').css('transition', '1s');
        setTimeout(() => {
            jquery('#successTable').css('opacity', 0);
            jquery('#successTable').css('transition', '1s');
        }, 2500);
    }


}
