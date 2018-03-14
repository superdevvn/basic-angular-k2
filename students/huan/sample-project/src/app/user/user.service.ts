import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable()
export class UserService {
    constructor(private apiService: ApiService) {

    }
    getUsers() {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/getUsers/', {}).then(res => {
                console.log(res.json());
                resolve(res.json());
            }).catch(err => {
                console.error(err);
                reject(err);
            });
        });
    }
}
