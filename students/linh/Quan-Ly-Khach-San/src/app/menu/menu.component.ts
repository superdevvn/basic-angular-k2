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
    this.loginService.getAuthorize().then(user => {
      this.user = user;
    })
  }

  ngAfterViewInit() {
    $.getScript("assets/AutoHintTheme/js/utility/utility.js", function (data, textStatus, jqxhr) {
      $.getScript("assets/AutoHintTheme/js/demo/demo.js", function (data, textStatus, jqxhr) {
        $.getScript("assets/AutoHintTheme/js/main.js", function (data, textStatus, jqxhr) {
          Core.init();
        });
      });
    });
  }
  logout() {
    this.cookieService.deleteAll(this.apiService.token);
    this.router.navigate(["/login"]);
  }

}
