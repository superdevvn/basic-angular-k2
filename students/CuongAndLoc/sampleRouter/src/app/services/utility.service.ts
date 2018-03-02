import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UtilityService {

    constructor(private http:Http){}

    fullName:string;
    hello(firstName: string, lastName: string){
        this.fullName = `${firstName} ${lastName}`;
    }

    testAsync(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("A");
                let va1 = 1234;
                let va2 = 5678;
                resolve({va1:va1,va2:va2});
            },1000);
        });
    }

    login(userName:string, password:string){
        let url = "http://103.232.121.69:5103/api/login"
        return this.http.post(url,{
            username: userName,
            password:password
        }).toPromise();
    }
}