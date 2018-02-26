import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';

@Injectable()
export class UtilityService {

    constructor(private http:Http){}

    fullName:string;
    hello(firstName: string, lastName: string) {
        this.fullName = `${firstName} ${lastName}`
    }

    testAsync() {
        let promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("A");
            },1000);
        });

        return promise;
    }

    // login(userName:string, password:string){
    //     return new Promise((resolve, reject)=>{
    //         setTimeout(()=>{
    //             if (userName=="peter" && password=="123"){
    //                 resolve();
    //             } else reject("Sai ten dang nhap hoac mat khau");
    //         },1000);
    //     });
    // }
    login(userName:string,password:string){
        let url = "http://http://103.232.121.69:5103/api/login";
        return this.http.post(url, {
            userName: userName,
            password: password
        }).toPromise();
    }
}