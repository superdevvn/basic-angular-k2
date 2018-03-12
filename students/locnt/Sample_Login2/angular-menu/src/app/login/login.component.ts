import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private router:Router,private loginservice:LoginService) { }

  ngOnInit() {
  }
login(){
 this.loginservice.login(this.username,this.password).then(()=>{
   this.router.navigate(["/main/role-list"]);
 })
 alert(this.username);
 alert(this.password);
}
}
