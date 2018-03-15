import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
import { resolve } from "url";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class loginService{
    constructor(private apiService:ApiService, private cookieService:CookieService){ }
    login(username:string, password:string){
        return new Promise((resolve,reject) => {
            this.apiService.post('/api/login',{
                username:username,
                password:password
            }).then(res =>{
                this.apiService.token = res.json();
                this.cookieService.set('Auth',this.apiService.token);
                resolve(res.json());
            }).catch(err=>{
                console.log(err)
            })
        });
    }
}