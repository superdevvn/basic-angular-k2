import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'doc-gia',
  templateUrl: './doc-gia.component.html',
  styleUrls: ['./doc-gia.component.css']
})
export class DocGiaComponent implements OnInit {

  constructor(private utilityService:UtilityService) { }

  ngOnInit() {

    // this.utilityService.login("Sangg","123").catch(()=>{
    //   alert("Wrong username or password");

      this.utilityService.login2("Sang","123").then((res)=>{
        alert(res.json());
      }).catch((err)=>{
        console.log(err);
        alert("Sai ten dang nhap hoac mat khau");
      })
    // })
    
  }

}
