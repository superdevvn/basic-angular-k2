import { UnitService } from './service/unit.service';
import { Unit } from './shared/unit.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser/src/browser/title';
import * as jquery from 'jquery';
import { Component } from '@angular/core';

@Component({
    selector: 'unit-detail',
    templateUrl: './unit-detail.component.html',
})


export class UnitDetailComponent {
    unit: Unit = new Unit();
    id: number = 0;
    routerSubscription: any;
    title = '';

    constructor(private route: ActivatedRoute, private router: Router, private unitService: UnitService) {

    }

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id == 0) {
                this.title = "You are signing up the new Unit";
            } else {
                this.unitService.getUnit(this.id).then((res: Unit) => {
                    this.unit = res;
                    this.title = "You are editing the information " + this.unit.Name;
                }).catch(err => {
                    console.log(err);
                })
            }
        })
    }

    save() {
        this.unitService.saveUnit(this.unit).then((res: Unit) => {
            this.unit = res;
        }).catch(err => {
            //chỗ này cần thêm fuction để thất bại.
            alert('Save Failed!!!');
        })
    }

    back() {
        this.router.navigate(['main/unit-list']);
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