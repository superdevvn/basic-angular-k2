import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NotificationService } from '../../loadingService/notification.service';
import { CustomerService } from './customer.service';
declare var $: any;
declare var Core: any;
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',

})
export class CustomerListComponent implements OnInit {
  customers: any[];
  constructor(private customerService:CustomerService, private router: Router, private notificationService: NotificationService) { }
  
  ngOnInit() {
    this.customerService.getcustomers().then((customers: any) => {
      this.customers = customers;
      console.log(this.customers);
    });
  }
  detail(customer) {
    this.router.navigate(["/main/customer-detail", customer.Id]);
  }
  create() {
    this.router.navigate(["/main/customer-detail", 0]);
  }
  delete(customer) {
    this.customerService.deletecustomer(customer.Id).then(() => {
      this.notificationService.success('delete Success');
      this.router.navigate(["/main/customer-list"]);
    }).catch(err => {
      this.notificationService.error('Delete Failed');
    })
  }
}
