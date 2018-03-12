import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { loginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
  constructor(private router:Router, private loginService:loginService) { }

  ngOnInit() {
  }
  login(){
    this.loginService.login(this.username,this.password).then(()=>{
      this.router.navigate(["/main"]);
    })
    alert(this.username);
    alert(this.password);
  }

}
