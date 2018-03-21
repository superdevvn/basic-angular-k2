import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;
declare var Core: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: any;
  constructor(private apiService: ApiService,
    private loginService: LoginService,
    private router: Router,
    private cookieService: CookieService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      Core.init();
    }, 1000);
  }
  logout(){
    this.loginService.logout();
  }

}
