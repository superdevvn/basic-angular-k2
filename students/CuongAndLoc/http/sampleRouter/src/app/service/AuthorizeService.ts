import { Injectable } from "@angular/core";



@Injectable()
export class AuthorizeService {
    array = ['a', 'b', 'c', 'd'];
    login(id: string, pass: string) {
        let promise = new Promise((resolve,reject)=>{
            let check = false;
            if (this.array.some(value => value == id)) {
                check = true;
            } 
            resolve(check);
        })
        return promise;
    }
}
