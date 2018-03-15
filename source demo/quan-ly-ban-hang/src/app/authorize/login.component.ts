import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { LoadingService } from './../main/service/loading.service';
import { NotificationSerivce } from './../main/service/notification.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  listOfImage: string[] = ['waterfall.jpg', 'handsome.jpg', 'handsome1.jpg'];
  username: string;
  password: string;
  constructor(private router: Router, private loginService: LoginService, private loadService: LoadingService,
    private notiService: NotificationSerivce) {

  }
  ngOnInit() {
    $('#login-area').css('opacity', 0);
    setTimeout(() => {
      $('#login-area').css('opacity', 1);
      $('#login-area').css('transition', '1s');
    }, 500);
  }

  login() {
    this.loadService.start();
    this.loginService.login(this.username, this.password).then(() => {
      this.loadService.stop();
      this.router.navigate(["/main/dashboard"]);
      this.notiService.success('Login Successfully!!!');
    }).catch(err => {
      // alert(err); in ra lỗi.
      alert('Invalid Username or Password!!! Please try again!! Thanks');
      this.loadService.stop();
    });
  }



}
