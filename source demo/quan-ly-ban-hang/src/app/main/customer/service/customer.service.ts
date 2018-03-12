import { Customer } from './../shared/customer.model';
import { ApiService } from './../../../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor(private apiService: ApiService) {

    }

    saveCustomer(customer: Customer) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveCustomer', customer).then((res => { //vì đã định dạng res bên apiService rồi.
                resolve(res.json());
            })).catch(err => {
                reject(err);
            });
        });
    }

    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getCustomers', {}).then((res => {
                resolve(res.json());
            })).catch(err => {
                reject(err);
            });
        })
    }

    getCustomer(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getCustomer/${id}`).then((res => {
                resolve(res.json());
            })).catch(err => {
                reject(err);
            })
        })
    }


}


