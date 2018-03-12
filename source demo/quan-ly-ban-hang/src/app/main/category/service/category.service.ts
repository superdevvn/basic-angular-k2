import { Category } from './../shared/category.model';
import { ApiService } from './../../../api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

    constructor(private apiService: ApiService) {

    }

    saveCategory(category: Category) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveCategory', category).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            })
        })
    }

    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getCategories', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            })
        })
    }

    getCategory(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getCategory/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            })
        })
    }

}
