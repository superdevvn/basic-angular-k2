import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {
    host: string = 'http://103.232.121.69:5103/';
    token: string = 'none';
    constructor(private http: Http, private cookieService: CookieService, private router: Router) { //constructor chạy trước onNgInit()
        if (this.cookieService.check('Auth-SuperDev')) {
            this.token = this.cookieService.get('Auth-SuperDev');
        }
    }
    post(url: string, data: any) { //create post methods
        return new Promise<Response>((resolve, reject) => { //vi cha da~ dc dinh nghia nen resolve khong can ep kieu nua
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            headers.append("Auth-SuperDev", this.token);
            this.http.post(this.host + url, data, { headers: headers })
                .toPromise()
                .then(res => {
                    //if this methods execute successfully then returning "relsove"
                    if (res.status == 200) {
                        resolve(res);
                    } else {
                        alert('Syntax Error!!!')
                    }
                    //res means respone. resolve returns DATA
                }).catch(err => {//if not return the err(error).
                if (err.status == 401) {
                    this.router.navigate(['/login']);
                } else {
                    reject(err);
                }
            });
    });
}

get(url: string) { //Get methods
    return new Promise<Response>((resolve, reject) => {
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append("Auth-SuperDev", this.token);
        this.http.get(this.host + url, { headers: headers })
            .toPromise()
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
    });
}
}