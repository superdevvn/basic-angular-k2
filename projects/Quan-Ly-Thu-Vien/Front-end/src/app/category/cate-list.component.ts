import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';
import { CateService } from './cate.service';
@Component({
  selector: 'cate-list',
  templateUrl: './cate-list.component.html'
})
export class CateListComponent implements OnInit {
roles: any[];
  constructor(private cateService: CateService, private router:Router, private loadingService: LoadingService,
  private apiService:ApiService, private Notification:NotificationService) { }

  ngOnInit() {
    this.cateService.getCates().then((roles:any[])=>{
    this.roles = roles;
    this.loadingService.stop();

    }).catch(err=>{
      alert(err);
      this.loadingService.stop();
    })
    }

    detail(role){
      alert(role.Name);
      this.router.navigate(["/main/cate-detail",role.Id]);
    }

    create(){
      this.router.navigate(["/main/cate-detail",0]);
    }

    delete(role) {
      this.cateService.deleteRole(role.Id).then(() => {
        this.cateService.getCates().then((roles: any[]) => {
          this.roles = roles;
        });
      });
      this.Notification.success('Deleted');
    }

    
}
