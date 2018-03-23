import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../api.service";
declare var $:any;
@Injectable()
export class ProductService {
    constructor(private apiService: ApiService) { }
    getProduct(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`/api/getProduct/${id}`).then(res => {
               
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    getProducts() {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/getProducts/', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    saveProduct(product) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/saveProduct/', product).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    // deleteUser(id) {
    //     return new Promise((resolve, reject) => {
    //         this.apiService.delete(`/api/deleteProduct?id=${id}`).then(() => {
    //             resolve();
    //         }).catch(err => {
    //             reject(err);
    //         })
    //     });
    // }
}