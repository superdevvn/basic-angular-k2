import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html'
  
})
export class RoleListComponent implements OnInit {
  customers:any[]
  constructor(private rolesevice:RoleService) { }

  ngOnInit() {
    this.rolesevice.getCustomer().then((customers:any[])=>{
      this.customers =customers;
    })
  }

}
