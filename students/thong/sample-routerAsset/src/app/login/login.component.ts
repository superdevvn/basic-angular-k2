import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private utilityService : UtilityService) { }

  ngOnInit() {
    this.utilityService.hello("Dark", "Peter");
  }

}
