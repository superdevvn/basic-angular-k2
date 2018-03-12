import { Component } from '@angular/core';
import { Role } from './shared/role.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from './service/role.service';
import * as $ from 'jquery';

@Component({
    selector: 'role-list',
    templateUrl: './role-list.component.html',
})
export class RoleListComponent {

    roles: Role[] = [];

    constructor(private router: Router, private roleService: RoleService) {
    }
    count: number = 0;
    onClick() {
        $('.body').slideToggle('slow', () => {

        });
    }

    ngOnInit() {
        this.roleService.getList().then((res: Role[]) => {
            this.roles = res;
            console.log("");
        }).catch(err => {
            alert(err);
        });
        $('.body').hide('fast', () => {

        });
        setTimeout(() => {
            $('.body').slideDown('slow', () => {

            });
        }, 500);
    }

    ngAfterViewInit() {
    }

    detail(role: Role) {
        console.log('role : ' + role.Id);
        this.router.navigate(['/main/role-detail', role.Id]);
    }
}