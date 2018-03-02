import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent {

  constructor(private utilityService: UtilityService) { 

  }

  ngOnInit() {
    this.utilityService.login("Sang","123").then(res=>{
      alert(res.json());
    }).catch((err)=>{
      console.log(err);
      alert("Sai Ten Dang Nhap Hoac Mat Khau");
    })
  }
}
