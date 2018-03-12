import { Component } from '@angular/core';
import { Customer } from './../shared/customer.model';
import * as jquery from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './service/user.service';
import { User } from './shared/user.model';
import { LoadingService } from '../service/loading.service';
import { NotificationSerivce } from '../service/notification.service';


@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
})
export class UserListComponent {


    users: User[] = [];

    constructor(private router: Router, private userService: UserService, private loadingService: LoadingService, private notiService:NotificationSerivce) {
    }
    count: number = 0;
    onClick() {
        $('.body').slideToggle('slow', () => {

        });
    }

    ngOnInit() {
        // this.loadingService.start();
        this.userService.getList().then((res: User[]) => {
            this.users = res;
            // this.loadingService.stop();
            // this.notiService.error('Error!!!');
        }).catch(err => {
            alert(err);
            // this.notiService.error('Error!!!');
            // this.loadingService.stop();
        });

        //bất đồng bộ là khi chạy qua code bất đồng bộ thì nó sẽ chạy ngược lên.
        //bất đồng bộ:consolse.log('b')
        //consolse.log('a')
        //thì nó sẽ chạy ra a trước rồi chạy sang b


    }

    ngAfterViewInit() {
    }

    detail(user: User) {
        this.router.navigate(['/main/user-detail', user.Id]);
    }


    // onclick() {
    //     var value = document.getElementById('searchBar').style.opacity;
    //     if (value === '0') {
    //         jquery('#searchBar').css('opacity', 1);
    //         jquery('#searchBar').css('transition', '1s');
    //     } else {
    //         jquery('#searchBar').css('opacity', 0);
    //         jquery('#searchBar').css('transition', '1s');
    //     }
    // }

}