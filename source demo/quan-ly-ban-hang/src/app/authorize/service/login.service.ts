import { Injectable } from '@angular/core';
import { ApiService } from './../../api.service';
import { User } from './../../main/user/shared/user.model';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class LoginService {
    user: User;
    constructor(private apiService: ApiService, private cookieService: CookieService) {

    }

    login(username, password) {
        return new Promise<User>((resolve, reject) => {
            this.apiService.post('api/login', {
                username: username,
                password: password
            }).then(res => {
                this.apiService.token = res.json();
                this.cookieService.set('Auth-SuperDev', this.apiService.token);
                this.getAuthorize().then(user => {
                    resolve(user);
                }).catch(err => {
                    reject(err);
                })
            }).catch(err => {
                reject(err);
            });
        });
    }

    getAuthorize() {
        return new Promise<User>((resolve, reject) => {
            this.apiService.get(`api/authorize/${this.apiService.token}`).then(res => {
                this.user = res.json();
                resolve(this.user);
            }).catch(err => {
                reject(err);
            })
        })
    }


}
