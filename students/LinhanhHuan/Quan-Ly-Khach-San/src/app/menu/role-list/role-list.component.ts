import { Component, OnInit } from '@angular/core';
import { RoleListService } from './role-list.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles: any[];
  constructor(private roleService: RoleListService) { }

  ngOnInit() {
    this.roleService.getRoles().then((roles: any[]) => {
      this.roles = roles;
    });
  }

}
