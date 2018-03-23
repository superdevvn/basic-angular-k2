import { Injectable } from '@angular/core';
import { Router, } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { promise } from 'selenium-webdriver';
import { CookieService } from 'ngx-cookie-service';
import { LoadingService } from './loadingService/loading.service';

@Injectable()
export class ApiService {
  //  host: string = 'http://103.232.121.69:5202';
   host: string = 'http://localhost:8245';
    token: string = "none";
    constructor(private router: Router, private http: Http, private cookieService: CookieService, private loadingService:LoadingService) {
        this.token = this.cookieService.check('Auth') ? this.cookieService.get('Auth') : 'none';
    }

    post(url: string, data: any) {
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers();
            headers.append("Auth-SuperDev", this.token);
            this.http.post(this.host + url, data, { headers: headers })
                .toPromise()
                .then(res => {
                    if (res.status == 200 || res.status == 204) {
                        resolve(res);
                    } else {
                        reject("Có lỗi xảy ra");
                    }
                }).catch(err => {
                    if (err.status == 401){
                        this.router.navigate(["/login"]);
                        this.loadingService.stop();
                    } 
                    else reject(err);
                });
        });
    }
    get(url: string) {
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers();
            headers.append("Auth-SuperDev", this.token);
            this.http.get(this.host + url, { headers: headers }).toPromise().then(res => {
                resolve(res);
            }).catch(err => {
                if (err.status == 401) this.router.navigate(["/login"]);
                else reject(err);
            });
        });
    }
    delete(url: string) {
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers();
            headers.append("Auth-SuperDev", this.token);
            this.http.delete(this.host + url, { headers: headers }).toPromise().then(res => {
                resolve(res);
            }).catch(err => {
                if (err.status == 401) this.router.navigate(["/login"]);
                else reject(err);
            });
        });
    }
}
