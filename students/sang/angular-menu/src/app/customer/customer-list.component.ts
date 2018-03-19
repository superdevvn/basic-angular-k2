import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router"
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';
import { CustomerService } from './customer.service';
@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
roles: any[];
  constructor(private customerService: CustomerService, private router:Router, private loadingService: LoadingService,
  private apiService:ApiService, private Notification:NotificationService) { }

  ngOnInit() {
    this.customerService.getCustomers().then((roles:any[])=>{
    this.roles = roles;
    this.loadingService.stop();

    }).catch(err=>{
      alert(err);
      this.loadingService.stop();
    })
    }

    detail(role){
      alert(role.Name);
      this.router.navigate(["/main/customer-detail",role.Id]);
    }

    create(){
      this.router.navigate(["/main/customer-detail",0]);
    }

    delete(role) {
      this.customerService.deleteRole(role.Id).then(() => {
        this.customerService.getCustomers().then((roles: any[]) => {
          this.roles = roles;
        });
      });
      this.Notification.success('Deleted');
    }

    
}
