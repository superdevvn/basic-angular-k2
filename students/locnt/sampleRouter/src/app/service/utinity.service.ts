import { Injectable } from "@angular/core";
import {Http} from '@angular/http';

@Injectable()
export class UnitityService{
    constructor(private http:Http){}
    hello(firstName:string,lastName:string){
        alert(`${firstName} ${lastName}`);
    }
    login(username:string,password:string){
        let url= "http://103.232.121.69:5103/api/login";
        return this.http.post(url,{
            username:username,
            password:password
        }).toPromise();
    }
}