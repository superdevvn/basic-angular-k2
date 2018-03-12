import { Component, OnInit } from '@angular/core';
import { RoleListService } from './role-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles: any[];
  constructor(private roleService: RoleListService, private router: Router) { }

  ngOnInit() {
    this.roleService.getRoles().then((roles: any[]) => {
      this.roles = roles;
    });
  }

  detail(role) {
    this.router.navigate(["/main/role-detail", role.Id]);
  }
  create() {
    this.router.navigate(["/main/role-detail", 0]);
  }
}
