import { Component, OnInit } from '@angular/core';
import { SachService } from './sach.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'sach-detail',
  templateUrl: './sach-detail.component.html',
  styleUrls: ['./sach-detail.component.css']
 
})
export class SachDetailComponent implements OnInit {

  routerSubscription: any;
  role: any={};
  id: number;
  constructor(private sachService:SachService, private route:ActivatedRoute, private router: Router,
     private notification: NotificationService, private apiService:ApiService) { }

  ngOnInit() {
this.routerSubscription = this.route.params.subscribe(params=>{
  this.id = +params['id']; //convert string 'id' to a number
  if (this.id >0)
  this.sachService.getBook(this.id).then(res=>{
    this.role = res;
    console.log(this.role);
  })
})
  
}

save(){
  this.sachService.saveBook(this.role).then((res:any)=>{
    if(this.id ===0) this.router.navigate(["/main/sach-detail",res.Id]);
    this.notification.success('Saved');
  })
}

ngOnDestroy(){
  this.routerSubscription.unsubscribe();
}


  
}