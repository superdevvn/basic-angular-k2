import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../loadingService/loading.service';
import { NotificationService } from '../../loadingService/notification.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  routerSubscription: any = {};
  id: any = {};
  role: any = {};
  constructor(private activatedRoute: ActivatedRoute, private roleService: RoleService
  ,private loadingService:LoadingService, private router:Router, private notificationService:NotificationService) { }

  ngOnInit() {
    this.routerSubscription = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id > 0) {
        this.roleService.getRole(this.id).then((role: any) => {
          this.role = role;
        });
      }
    });

  }
  ngOnDestroy() {
    this.routerSubscription.unsubcribes;
  }
  save(role) {
    this.loadingService.start();
    this.roleService.saveRole(this.role).then((res: any) => {
      if (this.id === 0) this.router.navigate(["/main/product", res.Id]);
      this.loadingService.stop();
      this.notificationService.success('save success');
    }).catch(err => {
      this.loadingService.stop();
      this.notificationService.error('save failed!');
    })
  }
}


