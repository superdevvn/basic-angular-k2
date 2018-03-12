import { Component } from '@angular/core';
import { User } from './shared/user.model';
import * as jquery from 'jquery';
import { UserService } from './service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from '../role/service/role.service';
import { Role } from './../role/shared/role.model';
import { NotificationSerivce } from '../service/notification.service';


@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
})
export class UserDetailComponent {
    user: User = new User();
    id: number = 0;
    roles: Role[] = [];
    routerSubscription: any;
    title = '';
    constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private roleService: RoleService, private notiService:NotificationSerivce) {

    }

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => {
            this.roleService.getList().then((roles: Role[]) => {
                this.roles = roles;
                console.log(this.roles);
                if (this.id == 0) {
                    this.user.RoleId = roles[0].Id;
                    console.log(this.user.RoleId); //chọn dòng đầu cho mình trong combobox
                }
            });
            this.id = +params['id'];
            if (this.id == 0) {
                this.title = 'You are signing up the New User';
            }
            if (this.id > 0) {
                this.userService.getUser(this.id).then((res: User) => {
                    this.user = res;
                    this.title = 'You are editing the information';
                    jquery('#fullName').val(this.user.LastName + " " + this.user.FirstName);
                }).catch(err => {
                    console.log(err);
                })
            }
        });
    }

    ngAfterViewInit() {
        jquery('#firstName').change(() => { //nhập lastname và firstName thì mới có fullName
            let value = jquery('#firstName').val();
            let value01 = jquery('#lastName').val();
            let totalValue = value + " " + value01;
            jquery('#fullName').val(totalValue);
        });
        jquery('#lastName').change(() => {
            let value = jquery('#firstName').val();
            let value01 = jquery('#lastName').val();
            let totalValue = value + " " + value01;
            jquery('#fullName').val(totalValue);
        });
    }

    save() {
        this.userService.saveUser(this.user).then((res: User) => {
            if (this.id == 0) {
                this.router.navigate([`/main/user-detail/${res.Id}`]);
            }
            this.user = res;
        }).catch(err => {
            alert(err);
        })
    }



    back() {
        this.router.navigate(['/main/user-list']);
    }


    onclick() {
        // this.notiService.success('Save Successfully !!');
        jquery('#successTable').css('opacity', 1);
        jquery('#successTable').css('transition', '1s');
        setTimeout(() => {
            jquery('#successTable').css('opacity', 0);
            jquery('#successTable').css('transition', '1s');
        }, 4000);
    }
}