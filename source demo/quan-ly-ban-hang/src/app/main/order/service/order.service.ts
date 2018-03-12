import { Order } from './../shared/order.model';
import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';

@Injectable()
export class OrderService {
    constructor(private apiService: ApiService) {

    }

    saveOrder(order: Order) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveOrder', order).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            })
        })
    }

    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getOrders', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            })
        })
    }

    getOrder(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getOrder/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            })
        })
    }

}
