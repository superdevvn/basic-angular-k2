import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { ApiService } from '../api.service'


@Injectable()
export class LoginService {

    constructor(private apiservice: ApiService) { }

    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            this.apiservice.post('/api/login', {
                username: username,
                password: password
            }).then(res => {
                console.log(res);
                this.apiservice.token = res.json();
                resolve(res.json());
            }).catch(err => {
                console.log(err)
            })
        });


    }
}
