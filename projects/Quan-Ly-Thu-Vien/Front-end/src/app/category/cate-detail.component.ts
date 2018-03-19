import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ApiService } from '../services/api.service';
import { CateService } from './cate.service';

@Component({
  selector: 'cate-detail',
  templateUrl: './cate-detail.component.html',
  styleUrls: ['./cate-detail.component.css']
 
})
export class CateDetailComponent implements OnInit {

  routerSubscription: any;
  role: any={};
  id: number;
  constructor(private cateService:CateService, private route:ActivatedRoute, private router: Router,
     private notification: NotificationService, private apiService:ApiService) { }

  ngOnInit() {
this.routerSubscription = this.route.params.subscribe(params=>{
  this.id = +params['id']; //convert string 'id' to a number
  if (this.id >0)
  this.cateService.getCate(this.id).then(res=>{
    this.role = res;
    console.log(this.role);
  })
})
  
}

save(){
  this.cateService.getCate(this.role).then((res:any)=>{
    if(this.id ===0) this.router.navigate(["/main/cate-detail",res.Id]);
    this.notification.success('Saved');
  })
}

ngOnDestroy(){
  this.routerSubscription.unsubscribe();
}


  
}