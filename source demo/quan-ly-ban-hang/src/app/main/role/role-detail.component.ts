import { Component } from '@angular/core';
import * as jquery from 'jquery';
import { Role } from './shared/role.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from './service/role.service';

@Component({
    selector: 'role-detail',
    templateUrl: './role-detail.component.html',
})
export class RoleDetailComponent {
    role: Role = new Role()
    id: number = 0;
    routerSubscription: any;
    title = '';


    constructor(private route: ActivatedRoute, private router: Router, private roleService: RoleService) {

    }
    //tất cả các biến nằm khác nhau mà xài chung biến trong 1 service thì nó vẫn nhận.

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => { // id = 0 is new Role, > 0 is Edit
            this.id = +params['id']; //params is parameters
            if (this.id == 0) {
                this.title = 'You are signing up the New Role';
            } else {
                this.roleService.getRole(this.id).then((res: Role) => {
                    this.role = res;
                    this.title = 'You are editing the information';
                }).catch(err => {
                    console.log(err);
                });
            }
        });

    }

    save() {
        this.roleService.saveRole(this.role).then((res: Role) => {
            if (this.id == 0) {
                this.router.navigate([`/main/role-detail/${res.Id}`])
            }
            this.role = res;
        }).catch(err => {
            alert(err);
        });
    }

    back() {
        this.router.navigate(['/main/role-list']);
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