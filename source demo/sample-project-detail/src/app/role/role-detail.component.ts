import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from './role.service';

@Component({
  selector: 'role-detail',
  templateUrl: './role-detail.component.html'

})
export class RoleDetailComponent implements OnInit {

  routerSubscription: any;
  id: number;
  role: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private roleService: RoleService) { }
  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {//
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id > 0) {
        this.roleService.getRole(this.id).then(res => {
          this.role = res;
          console.log(this.role);
        });
      }
    });
  }

  save(){
    this.roleService.saveRole(this.role).then((res:any)=>{
      if(this.id === 0) this.router.navigate(["/main/role-detail", res.Id]);
    })
  }

  ngOnDestroy(){
    this.routerSubscription.unsubscribe();
  }
}
