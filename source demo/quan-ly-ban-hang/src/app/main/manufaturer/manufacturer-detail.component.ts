import { Component } from '@angular/core';
import { Manufacturer } from './shared/manufacturer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ManufacturerService } from './service/manufacturer.service';
import * as jquery from 'jquery';

@Component({
    selector: 'manufacturer-detail',
    templateUrl: './manufacturer-detail.component.html',
})
export class ManufacturerDetailComponent {
    id: number = 0;
    manufacturer: Manufacturer = new Manufacturer();
    routerSubscription: any;
    title = '';
    constructor(private router: Router, private route: ActivatedRoute, private manufacturerService: ManufacturerService) {

    }

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => { // id = 0 is new Role, > 0 is Edit
            this.id = +params['id']; //params is parameters
            if(this.id == 0) {
                this.title = 'You are signing up the New Manufacturer';
            }
            if (this.id > 0) {
                this.manufacturerService.getManufacturers(this.id).then((res: Manufacturer) => {
                    this.manufacturer = res;
                    this.title = 'You are editing the information';
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }

    save() {
        this.manufacturerService.saveManufacturer(this.manufacturer).then((res: Manufacturer) => {
            this.manufacturer = res;
        }).catch(err => {
            alert(err);
        });
    }

    back() {
        this.router.navigate(['/main/manufacturer-list']);
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
