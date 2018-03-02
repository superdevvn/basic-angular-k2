import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
@Injectable()
export class UtilityService {

  constructor(private http:Http){

  }
fullname: string;
 hello(fname: string,lname: string)
 {
   this.fullname = `${fname} ${lname}`
   alert(this.fullname);
 }

login(username:string, password:string){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(username == "Sang" && password =="123")
        resolve();
      else
      reject();
    },1000)
  })
}

login2(username: string, password: string){
  return this.http.post("http://103.232.121.69:5103/api/login",{
    username: username,
    password: password
  }).toPromise();
}

}