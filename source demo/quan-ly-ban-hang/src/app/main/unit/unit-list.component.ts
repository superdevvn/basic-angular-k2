import { Component } from '@angular/core';
import { UnitService } from './service/unit.service';
import { Unit } from './shared/unit.model';
import { Router } from '@angular/router';

@Component({
    selector: 'unit-list',
    templateUrl: './unit-list.component.html',
})
export class UnitListComponent {

    constructor(private unitService: UnitService, private router: Router) {

    }

    units: Unit[] = [];

    ngOnInit() {
        this.unitService.getList().then((res: Unit[]) => {
            this.units = res;
        }).catch(err => {
            console.log(err);
        });
    }

    detail(unit: Unit) {
        this.router.navigate(['/main/unit-detail', unit.Id]);
    }

}