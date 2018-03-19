import { Injectable } from "@angular/core";
import { ApiService } from "../../api.service";


declare var $:any;



@Injectable()
export class OrderService {
    constructor(private apiService: ApiService) { }
    getOrder(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`/api/getOrder/${id}`).then(res => {
                console.log(res.json());
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    getOrders() {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/getOrders/', {}).then(res => {
                console.log(res.json());
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    savecustomer(customer) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/saveOrder/', customer).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
   
}