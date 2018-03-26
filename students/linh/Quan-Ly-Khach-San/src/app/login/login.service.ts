import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Headers, Response } from "@angular/http";



@Injectable()
export class LoginService {
  user: any = {};
  constructor(private apiService: ApiService,
    private router: Router,
    private cookieService: CookieService) {

  }
  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.apiService.post('/api/login', {
        username: username,
        password: password
      }).then(res => {
        this.apiService.token = res.json();
        this.cookieService.set('auth-superdev', this.apiService.token);
        resolve(res.json());
      }).catch(err => {
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
