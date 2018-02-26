import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private utilityService : UtilityService) { }

  ngOnInit() {
    this.utilityService.fullName = "Le Van Thong";
    
  }

}
