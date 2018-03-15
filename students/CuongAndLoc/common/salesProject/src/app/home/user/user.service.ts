import { Injectable } from "@angular/core";
import { ApiService } from "../../api.service";


declare var $: any;



@Injectable()
export class UserService {
    constructor(private apiService: ApiService) { }
    getUser(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`/api/getCustomer/${id}`).then(res => {
                console.log(res.json());
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    getUsers() {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/getCustomers/', {}).then(res => {
                console.log(res.json());
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    saveUser(user) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/saveCustomer/', user).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    deleteUser(id) {
        return new Promise((resolve, reject) => {
            this.apiService.delete(`/api/deleteCustomer?id=${id}`).then(() => {
                resolve();
            }).catch(err => {
                reject(err);
            })
        });
    }
}