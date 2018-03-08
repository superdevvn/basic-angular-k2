import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
roles: any[];
  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.userService.getUsers().then((roles:any[])=>{
      this.roles=roles;
    })
  }

}
