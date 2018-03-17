import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: any;
  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginService.getAuthorize().then(user => {
      this.user = user;
    });
  }

}
