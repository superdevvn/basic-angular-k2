import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router"
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';
import { BookingService } from './booking.service';
@Component({
  selector: 'booking-list',
  templateUrl: './booking-list.component.html'
})
export class BookingListComponent implements OnInit {
roles: any[];
  constructor(private bookService: BookingService, private router:Router, private loadingService: LoadingService,
  private apiService:ApiService, private Notification:NotificationService) { }

  ngOnInit() {
    this.bookService.getRoles().then((roles:any[])=>{
    this.roles = roles;
    this.loadingService.stop();

    }).catch(err=>{
      alert(err);
      this.loadingService.stop();
    })
    }

    detail(role){

      this.router.navigate(["/main/booking-detail",role.Id]);
    }

    create(){
      this.router.navigate(["/main/booking-detail",0]);
    }

    delete(role) {
      this.bookService.deleteRole(role.Id).then(() => {
        this.bookService.getRoles().then((roles: any[]) => {
          this.roles = roles;
        });
      });
      this.Notification.success('Deleted');
    }

    
}
