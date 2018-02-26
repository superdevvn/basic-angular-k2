import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
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

    login(userName:string, password:string){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (userName=="peter" && password=="123"){
                    resolve();
                } else reject("Sai ten dang nhap hoac mat khau");
            },1000);
        });
    }
}