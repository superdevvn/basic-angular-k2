import { Customer } from './shared/customer.model';
import { CustomerService } from './service/customer.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as jquery from 'jquery';


@Component({
    selector: 'customer-list',
    templateUrl: './customer-list.component.html',
})
export class CustomerListComponent {

    constructor(private router: Router, private customerService: CustomerService) {

    }

    customers: Customer[] = [];

    ngOnInit() {
        this.customerService.getList().then((res: Customer[]) => {
            console.log(res);
            this.customers = res;
        }).catch(err => {
            console.log(err);
        })
    }

    detail(customer: Customer) {
        this.router.navigate(['/main/customer-detail', customer.Id]);
    }


    onClick() {
        $('.body').slideToggle('slow', () => {

        });
    }
}