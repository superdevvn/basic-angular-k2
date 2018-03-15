import { Component } from '@angular/core';
import { OrderService } from './service/order.service';
import { ProductService } from './../product/service/product.service';
import { CustomerService } from './../customer/service/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from './shared/order.model';
import { Customer } from './../customer/shared/customer.model';
import { Product } from './../product/shared/product.model';
import * as jquery from 'jquery';


@Component({
    selector: 'order-detail',
    templateUrl: './order-detail.component.html',
})

export class OrderDetailComponent {
    order: Order = new Order();
    customers: Customer[] = [];
    products: Product[] = [];
    id: number = 0;
    routerSubcription: any;
    title = '';
    constructor(private router: Router, private route: ActivatedRoute,
        private orderService: OrderService, private customerService: CustomerService,
        private productService: ProductService) {

    }

    ngOnInit() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.customerService.getList().then((res: Customer[]) => {
                this.customers = res;
                console.log(this.customers);
                if (this.id == 0) {
                    this.order.CustomerId = this.customers[0].Id;
                }
            }).catch(err => {
                console.log(err);
            });
            this.productService.getList().then((res: Product[]) => {
                this.products = res;
                if (this.id == 0) {
                    this.order.ProductId = this.products[0].Id;
                }
            }).catch(err => {
                console.log(err);
            });
            this.id = +params['id'];
            if (this.id == 0) {
                this.title = "You are signing up the new Order";
            } else {
                this.orderService.getOrder(this.id).then((res: Order) => {
                    this.order = res;
                    this.title = "You are editing the information";
                }).catch(err => {
                    console.log(err);
                })
            }
        });
    }

    save() {
        this.orderService.saveOrder(this.order).then((res: Order) => {
            this.order = res;
        }).catch(err => {
            console.log(err);
        })
    }

    back() {
        this.router.navigate(['/main/order-list']);
    }

    onclick() {
        jquery('#successTable').css('opacity', 1);
        jquery('#successTable').css('transition', '1s');
        setTimeout(() => {
            jquery('#successTable').css('opacity', 0);
            jquery('#successTable').css('transition', '1s');
        }, 4000);
    }


}