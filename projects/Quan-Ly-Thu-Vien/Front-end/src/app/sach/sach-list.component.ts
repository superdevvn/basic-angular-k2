import { Component, OnInit } from '@angular/core';
import { SachService } from './sach.service';
import {Router} from "@angular/router"
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'sach-list',
  templateUrl: './sach-list.component.html'
})
export class SachListComponent implements OnInit {
roles: any[];
  constructor(private sachService: SachService, private router:Router, private loadingService: LoadingService,
  private apiService:ApiService, private Notification:NotificationService) { }

  ngOnInit() {
    this.sachService.getBooks().then((roles:any[])=>{
    this.roles = roles;
    this.loadingService.stop();

    }).catch(err=>{
      alert(err);
      this.loadingService.stop();
    })
    }

    detail(role){
      alert(role.Name);
      this.router.navigate(["/main/sach-detail",role.Id]);
    }

    create(){
      this.router.navigate(["/main/sach-detail",0]);
    }

    delete(role) {
      this.sachService.deleteRole(role.Id).then(() => {
        this.sachService.getBooks().then((roles: any[]) => {
          this.roles = roles;
        });
      });
      this.Notification.success('Deleted');
    }

    
}
