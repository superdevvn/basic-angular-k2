import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../loadingService/notification.service';
import { LoadingService } from '../../loadingService/loading.service';
import { UserService } from './user.service';
import { OrderService } from '../customer/order.service';
import { RoleService } from '../role/role.service';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class userDetailComponent implements OnInit {
  routerSubscription: any;
  id: number;
  user: any = {};
  order: any = {};
  roles: any[];
  constructor(private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private loadingService: LoadingService, private orderService: OrderService, private roleService: RoleService) { }

  ngOnInit() {
    this.routerSubscription = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id > 0) {
        this.userService.getUser(this.id).then(res => {
          this.user = res;
          console.log(this.user);
        });
      }
      this.roleService.getRoles().then((res: any) => {
        this.roles = res;
        if(this.id == 0){
          this.user.RoleId = this.roles[0].Id;
        
        }
      });
    });

  }
  ngOnDestroy() {
    this.routerSubscription.unsubcribes;
  }
  save(user) {
    this.loadingService.start();
    var currentDay = new Date();
    this.user.Id = this.id;
    user.CreatedDate = currentDay.toDateString();
    this.userService.saveUser(this.user).then((res: any) => {
      if (this.id === 0) this.router.navigate(["/main/user-detail", res.Id]);
      this.loadingService.stop();
      this.notificationService.success('save success');
    }).catch(err => {
      this.loadingService.stop();
      this.notificationService.error('save failed!');
    })
  }

}
