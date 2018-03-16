import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'role-detail',
  templateUrl: './role-detail.component.html'
 
})
export class RoleDetailComponent implements OnInit {

  routerSubscription: any;
  role: any={};
  id: number;
  constructor(private roleService:RoleService, private route:ActivatedRoute, private router: Router,
     private notification: NotificationService) { }

  ngOnInit() {
this.routerSubscription = this.route.params.subscribe(params=>{
  this.id = +params['id']; //convert string 'id' to a number
  if (this.id >0)
  this.roleService.getRole(this.id).then(res=>{
    this.role = res;
    console.log(this.role);
  })
})
  
}

save(){
  this.roleService.saveRole(this.role).then((res:any)=>{
    if(this.id ===0) this.router.navigate(["/main/role-detail",res.Id]);
    this.notification.success('Saved');
  })
}

ngOnDestroy(){
  this.routerSubscription.unsubscribe();
}
}
