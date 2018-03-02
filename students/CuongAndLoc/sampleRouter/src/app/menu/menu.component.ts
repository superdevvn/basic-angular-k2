import { Component, OnInit } from '@angular/core';
import { UnitityService } from '../service/utinity.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private unitityService:UnitityService) { }

  ngOnInit() {
   this.unitityService.hello('Dark','Peter'); 
  }

}
