import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: any[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().then((users:any[])=>{
      this.users = users;
    });
  }

}
