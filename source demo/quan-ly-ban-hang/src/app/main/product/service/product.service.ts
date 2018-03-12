import { Product } from './../shared/product.model';
import { ApiService } from './../../../api.service';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService {

    constructor(private apiService: ApiService) {

    }

    saveProduct(product: Product) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveProduct', product).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }


    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getProducts', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            })
        })
    }

    getProduct(id) {
        return new Promise((resolve, reject) => {
            console.log('api : ');
            this.apiService.get(`api/getProduct/${id}`).then(res => {
                resolve(res.json());
                console.log('api : '+ res.json());
            }).catch(err => {
                reject(err);
            })
        })
    }


}