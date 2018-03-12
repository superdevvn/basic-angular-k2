import { Component } from '@angular/core';
import { OrderService } from './service/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from './shared/order.model';


@Component({
    selector: 'order-list',
    templateUrl: './order-list.component.html',
})

export class OrderListComponent {
    orders: Order[] = [];
    constructor(private orderService: OrderService, private router: Router) {

    }

    ngOnInit() {
        this.orderService.getList().then((res: Order[]) => {
            this.orders = res;
        }).catch(err => {
            console.log(err);
        });
    }

    detail(order: Order) {
        this.router.navigate(['/main/order-detail/', order.Id]);
    }



}