import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ApiService } from '../services/api.service';
import { BookingService } from './booking.service';

@Component({
  selector: 'booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']

})
export class BookingDetailComponent implements OnInit {

  routerSubscription: any;
  role: any = {};
  id: number;
  constructor(private bookService: BookingService, private route: ActivatedRoute, private router: Router,
    private notification: NotificationService, private apiService: ApiService) { }

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {
      this.id = +params['id']; //convert string 'id' to a number
      if (this.id > 0) {
        this.bookService.getRole(this.id).then(res => {
          this.role = res;
          console.log(this.role);
        });
      } else this.role.FromDate = new Date();
    })

  }

  save() {
    this.bookService.saveRole(this.role).then((res: any) => {
      if (this.id === 0) this.router.navigate(["/main/booking-detail", res.Id]);
      this.notification.success('Saved');
    })
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }



}