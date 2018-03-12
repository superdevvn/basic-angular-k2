import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent implements OnInit {
  roles: any[];
  constructor(private roleService:RoleService) { }

  ngOnInit() {
    this.roleService.getRoles().then((roles:any[])=>{
      this.roles = roles;
    });
  }

}
