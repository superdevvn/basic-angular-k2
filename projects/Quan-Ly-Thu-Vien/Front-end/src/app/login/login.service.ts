import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Headers, Response } from "@angular/http";
import { ApiService } from '../services/api.service';
import { CookieService } from "ngx-cookie-service"
import { NotificationService } from '../services/notification.service';
@Injectable()
export class LoginService {
    user: any={};
    constructor(private apiService: ApiService, private cookieService: CookieService,
         private router: Router, private notificationService: NotificationService) {

    }
    //auth-superdev
    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/login', {
                username: username,
                password: password
            }).then(res => {
                this.apiService.token = res.json();
                this.cookieService.set('auth-superdev', this.apiService.token);
                this.notificationService.success("Log in successful");
                resolve(res.json());
            }).catch(err => {
                this.notificationService.warning("Wrong username or password");
                console.log(err)
            })
        });
    }

    getAuthorize() {
        return new Promise((resolve, reject) => {
            this.apiService.get(`/api/authorize`).then(res => {
                this.user = res.json();
                resolve(this.user);
            }).catch(err => {
                reject(err);
            })
        })
    }

    logout() {
        this.cookieService.delete('auth-superdev');
        this.apiService.token = "none";
        this.router.navigate(["/login"]);
    }



}
