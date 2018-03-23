import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../loadingService/notification.service';
import { UserService } from './user.service';

declare var $: any;
declare var Core: any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent implements OnInit {
  users: any[];
  constructor(private userService: UserService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
    this.userService.getUsers().then((customers: any) => {
      this.users = customers;
      console.log(this.users);
    });
  }
  detail(user) {
    this.router.navigate(["/main/user-detail", user.Id]);
  }
  create() {
    this.router.navigate(["/main/user-detail", 0]);
  }
  // delete(customer) {
  //   this.userService.deletecustomer(customer.Id).then(() => {
  //     this.notificationService.success('delete Success');
  //     this.router.navigate(["/main/customer-list"]);
  //   }).catch(err => {
  //     this.notificationService.error('Delete Failed');
  //   })
  // }
}
