import { Injectable } from "@angular/core";
import { ApiService } from "../../api.service";


declare var $:any;



@Injectable()
export class CustomerService {
    constructor(private apiService: ApiService) { }
    getcustomer(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`/api/getCustomer/${id}`).then(res => {
              
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    getcustomers() {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/getCustomers/', {}).then(res => {
             
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    savecustomer(customer) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/saveCustomer/', customer).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    deletecustomer(id) {
        return new Promise((resolve, reject) => {
            this.apiService.delete(`/api/deleteCustomer?id=${id}`).then(() => {
                resolve();
            }).catch(err => {
                reject(err);
            })
        });
    }
}