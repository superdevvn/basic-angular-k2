import { Component, OnInit } from '@angular/core';
import { UnitityService } from '../../service/utinity.service';
import { AuthorizeService } from '../../service/AuthorizeService';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  

  constructor(private unitityService:UnitityService, private authorizeService:AuthorizeService ) { }

  ngOnInit() {
    // this.unitityService.testAsync();
    // console.log("B");
    this.authorizeService.login('a','b').then((res:any)=>{
      if(res == true){
        alert("login success");
      }else{
        alert("login fail");
      }
    });
    this.unitityService.login("loc","123").then(res => {
      alert(res.json());
    }).catch((err) => {
      console.log(err);
      alert("Sai Ten Dang Nhap Hoac Mat Khau");
    })
  }

}
