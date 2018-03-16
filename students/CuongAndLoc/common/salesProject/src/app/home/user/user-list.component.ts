import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../loadingService/notification.service';
declare var $: any;
declare var Core: any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private notificationService: NotificationService) { }
  users: any[];
  ngOnInit() {
    this.userService.getUsers().then((users: any) => {
      this.users = users;
    });
  }
  detail(user) {
    this.router.navigate(["/main/user-detail", user.Id]);
  }
  create() {
    this.router.navigate(["/main/user-detail", 0]);
  }
  delete(user) {
    this.userService.deleteUser(user.Id).then(() => {
      this.notificationService.success('delete Success');
      this.router.navigate(["/main/user-list"]);
    }).catch(err => {
      this.notificationService.error('Delete happen');
    })
  }
}
