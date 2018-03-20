import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ApiService } from '../services/api.service';
import { CategoryService } from './cate.service';

@Component({
  selector: 'category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
 
})
export class CategoryDetailComponent implements OnInit {

  routerSubscription: any;
  role: any={};
  id: number;
  titles:String='';
  constructor(private categoryService:CategoryService, private route:ActivatedRoute, private router: Router,
     private notification: NotificationService, private apiService:ApiService) { }

  ngOnInit() {
this.routerSubscription = this.route.params.subscribe(params=>{
  this.id = +params['id']; //convert string 'id' to a number
  if (this.id >0)
  {
  this.titles="You are editting a category";
  this.categoryService.getCategory(this.id).then(res=>{
    this.role = res;
    console.log(this.role);
  })
}
else this.titles="You are creating a new category";
})
  
}

save(){
  this.categoryService.saveCategory(this.role).then((res:any)=>{
    if(this.id ===0) this.router.navigate(["/main/role-detail",res.Id]);
    this.notification.success('Saved');
  })
}

ngOnDestroy(){
  this.routerSubscription.unsubscribe();
}


  
}