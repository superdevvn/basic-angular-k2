import { Customer } from './shared/customer.model';
import { CustomerService } from './service/customer.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as jquery from 'jquery';

@Component({
    selector: 'customer-detail',
    templateUrl: './customer-detail.component.html',
})

export class CustomerDetailComponent {
    customer: Customer = new Customer(); //khi tạo thì phải thêm mới
    id: number = 0;
    routerSubscription: any;
    title = '';

    constructor(private router: Router, private route: ActivatedRoute, private customerService: CustomerService) {

    }

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id == 0) {
                this.title = 'You are signing up the new Customer';
            }
            if (this.id > 0) {
                this.customerService.getCustomer(this.id).then((res: Customer) => {
                    this.customer = res;
                    console.log(this.customer);
                    this.title = 'You are editing the information';
                }).catch(err => {
                    console.log(err);
                })
            }
        });
    }


    save() {
        this.customerService.saveCustomer(this.customer).then((res: Customer) => {
            if (this.id == 0) {
                this.router.navigate([`/main/customer-detail/${res.Id}`]);
            }
            console.log(res);
            this.customer = res;
        }).catch(err => {
            console.log(err);
        })
    }

    back() {
        this.router.navigate(['/main/customer-list']);
    }


    onclick() {
        jquery('#successTable').css('opacity', 1);
        jquery('#successTable').css('transition', '1s');
        setTimeout(() => {
            jquery('#successTable').css('opacity', 0);
            jquery('#successTable').css('transition', '1s');
        }, 2500);
    }
}

