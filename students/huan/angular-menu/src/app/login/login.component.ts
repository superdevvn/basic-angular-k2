import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }
  login() {
    this.loginService.login(this.username, this.password).then(() => {
      alert("Login Success");
    }).catch((err) => {
      alert("Login Fail");
      console.error(err);
    });

  }
}
