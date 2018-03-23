import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from './role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles: any[];
  constructor(private router: Router, private roleService: RoleService) { }

  ngOnInit() {
    this.roleService.getRoles().then((roles: any) => {
      this.roles = roles;
      console.log(this.roles);
    });
  }
  detail(product) {
    this.router.navigate(["/main/role", product.Id]);
  }
  create() {
    this.router.navigate(["/main/role", 0]);
  }
}
