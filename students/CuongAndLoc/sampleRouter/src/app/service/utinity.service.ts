import { Injectable } from "@angular/core";
import { resolve } from "path";
import { reject } from "q";
import { Http } from "@angular/http/src/http";



@Injectable()
export class UnitityService{
    constructor(private http:Http){}
    hello(firstName:string,lastName:string){
        alert(`${firstName} ${lastName}`);
    }
    testAsync(){
        let promise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("A");
                let va = 1234;
                resolve(va);
            },1000);
        });
        return promise;
       
    }
    
}