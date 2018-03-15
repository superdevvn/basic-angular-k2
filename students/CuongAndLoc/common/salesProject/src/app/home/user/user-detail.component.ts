import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../loadingService/notification.service';
import { LoadingService } from '../../loadingService/loading.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',

})
export class UserDetailComponent implements OnInit {
  routerSubscription:any;
  id:number;
  user:any={};
  constructor(private router:Router, private userService:UserService,private activatedRoute:ActivatedRoute, 
    private notificationService:NotificationService, private loadingService:LoadingService) { }

  ngOnInit() {
    this.routerSubscription = this.activatedRoute.params.subscribe(params=>{
      this.id = +params['id'];
      if(this.id > 0){
        this.userService.getUser(this.id).then(res=>{
          this.user = res;
          console.log(this.user);
        });
      }
    });
    }
    ngOnDestroy(){
      this.routerSubscription.unsubcribes; 
    }
    save(user){
      this.loadingService.start();
      this.userService.saveUser(this.user).then((res:any)=>{
        if(this.id === 0)this.router.navigate(["/main/user-detail",res.Id]);
        this.loadingService.stop();
        this.notificationService.success('save success');
      }).catch(err=>{
        this.loadingService.stop();
        this.notificationService.error('save failed!');
      })
    }
  
}
