import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../loadingService/notification.service';
import { LoadingService } from '../../loadingService/loading.service';
import { CustomerService } from './customer.service';
import { OrderService } from './order.service';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  routerSubscription: any;
  id: number;
  customer: any = {};
  order: any = {};
  constructor(private router: Router, private customerService: CustomerService, private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService, private loadingService: LoadingService, private orderService: OrderService) { }

  ngOnInit() {
    this.routerSubscription = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id > 0) {
        this.customerService.getcustomer(this.id).then(res => {
          this.customer = res;
          console.log(this.customer);
        });
        this.orderService.getOrder(this.id).then((res:any) => {
         this.order = res;
          console.log(this.order);
        });
      }
    });
    
  }
  ngOnDestroy() {
    this.routerSubscription.unsubcribes;
  }
  save(customer) {
    this.loadingService.start();
    this.customerService.savecustomer(this.customer).then((res: any) => {
      if (this.id === 0) this.router.navigate(["/main/customer-detail", res.Id]);
      this.loadingService.stop();
      this.notificationService.success('save success');
    }).catch(err => {
      this.loadingService.stop();
      this.notificationService.error('save failed!');
    })
  }

}
