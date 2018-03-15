import { Injectable } from '@angular/core';
import { User } from './../shared/user.model';
import { ApiService } from './../../../api.service';


@Injectable()
export class UserService {
    constructor(private apiService: ApiService) {

    }

    saveUser(user: User) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveUser', user).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        })
    }

    getList() {
        return new Promise((resolve, reject) =>{
            this.apiService.post('api/getUsers',{}).then(res=>{
                resolve(res.json());
            }).catch(err =>{
                reject(err);
            });
        })
    }

    getUser(id) {
        return new Promise((resolve, reject)=>{
            this.apiService.get(`api/getUser/${id}`).then(res=>{
                resolve(res.json());
            }).catch(err =>{
                reject(err);
            });
        });
    }

    
}