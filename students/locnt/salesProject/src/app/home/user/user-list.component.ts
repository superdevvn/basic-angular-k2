import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }
  roles: any[];
  ngOnInit() {
    this.userService.getRoles().then((roles: any) => {
      this.roles = roles;
    });
  }

}
