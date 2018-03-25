import { Component, OnInit } from '@angular/core';
import { OrderService } from '../customer/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
orders:any[];
  constructor(private orderService:OrderService, private router:Router) { }

  ngOnInit() {
    this.orderService.getOrders().then((orders: any) => {
      this.orders = orders;
      console.log(this.orders);
    });
  }
  detail(order) {
    this.router.navigate(["/main/order", order.Id]);
  }
  create() {
    this.router.navigate(["/main/order", 0]);
  }
}
