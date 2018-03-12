import { Component } from '@angular/core';
import { Manufacturer } from './shared/manufacturer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ManufacturerService } from './service/manufacturer.service';

@Component({
    selector: 'manufacturer-list',
    templateUrl: './manufacturer-list.component.html',
})
export class ManufacturerListComponent {

    manufacturers: Manufacturer[] = [];

    constructor(private router: Router, private manufacturerService: ManufacturerService) {
    }

    ngOnInit() {
        this.manufacturerService.getList().then((res: Manufacturer[]) => {
            this.manufacturers = res;
            console.log(res);
        }).catch(err => {
            alert(err);
        });
    }
    
    onClick() {
        $('.body').slideToggle('slow', () => {

        });
    }

    ngAfterViewInit() {
    }

    detail(manufacturer: Manufacturer) {
        this.router.navigate(['/main/manufacturer-detail', manufacturer.Id]);
    }
}
