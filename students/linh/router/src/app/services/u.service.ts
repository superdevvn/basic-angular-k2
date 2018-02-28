import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class UService {
constructor(private http:Http){}

    fullname: string;
    hello(firstname: string, lastname: string) {
        this.fullname = `${firstname} ${lastname}`;
    }

    testAsync() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("A");
                resolve();
            }, 1000);
        });
        return promise;

    }
    UserList = ['linh123', 'linh'];
    PassList = ['12345', '012'];
    login(username: string, password: string) {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username == "linh" && password == "1234") {
                    resolve(true);
                }
                else reject(false);
            }, 1000);
        });
        return promise;
    }
    // login1(username:string, lastname:string){
    //     let url= "http://103.232.121.69:5103/api/login1";
    //     return this.http.post(url,{
    //         username: username,
    //         lastname: lastname
    //     })
    // }
}