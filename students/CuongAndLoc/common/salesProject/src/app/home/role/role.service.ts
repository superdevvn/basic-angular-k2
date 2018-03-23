import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../api.service";
declare var $:any;
@Injectable()
export class RoleService {
    constructor(private apiService: ApiService) { }
    getRole(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`/api/getRole/${id}`).then(res => {             
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    getRoles() {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/getRoles/', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    saveRole(product) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/saveRole/', product).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    // deleteRole(id) {
    //     return new Promise((resolve, reject) => {
    //         this.apiService.delete(`/api/deleteRole?id=${id}`).then(() => {
    //             resolve();
    //         }).catch(err => {
    //             reject(err);
    //         })
    //     });
    // }
}