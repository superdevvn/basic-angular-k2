import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import {Router} from "@angular/router"
import { LoadingService } from '../services/loading.service';
@Component({
  selector: 'role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent implements OnInit {
roles: any[];
  constructor(private roleService: RoleService, private router:Router, private loadingService: LoadingService) { }

  ngOnInit() {
    this.roleService.getRoles().then((roles:any[])=>{
    this.roles = roles;
    this.loadingService.stop();

    }).catch(err=>{
      alert(err);
      this.loadingService.stop();
    })
    }

    detail(role){
      alert(role.Name);
      this.router.navigate(["/main/role-detail",role.Id]);
    }

    create(){
      this.router.navigate(["/main/role-detail",0]);
    }
}
