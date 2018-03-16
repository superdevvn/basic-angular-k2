import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Headers, Response } from "@angular/http";
import { ApiService } from '../services/api.service';
import { CookieService } from "ngx-cookie-service"
@Injectable()
export class LoginService {

    constructor(private apiService: ApiService, private cookieService: CookieService) {

    }

    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/login/', {
                username: username,
                password: password
            }).then(res => {
                console.log(res);
                this.apiService.token = res.json();
                this.cookieService.set('auth-superdev', this.apiService.token);
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            })
        })
    }

    getAuthorize() {
        return new Promise((resolve, reject) => {
            this.apiService.get('/api/authorize/').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        })
    }
}