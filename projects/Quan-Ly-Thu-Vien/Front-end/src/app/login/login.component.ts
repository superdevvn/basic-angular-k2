import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {Router} from "@angular/router"
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password: string;
  user:any ={};
  constructor(private router: Router,private loginService:LoginService,
  private cookieService: CookieService, private notificationService: NotificationService) { }

  ngOnInit() {
    }
    login(){
      this.loginService.login(this.username,this.password).then(()=>{
        this.router.navigate(["/main/dashboard"]);
      }).catch((err)=>{
        {
          alert("Login fail");
          console.log(err);
          this.notificationService.success("Wrong user name of password");
        }
      })
     
  }

  rememberMe(){
    if(this.cookieService.get('remember')){
        this.user.username=this.cookieService.get('username');
        this.user.password=this.cookieService.get('password');
        this.user.rememberMe=this.cookieService.get('remember');
    }
}
  
}
