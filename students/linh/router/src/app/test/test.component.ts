import { Component, OnInit } from '@angular/core';
import { UService } from '../services/u.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private uService: UService) { }

  

  ngOnInit() {
    // this.uService.hello("Linh","Nguyen");
    // this.uService.fullname="Linh Nguyen";
    // this.uService.testAsync().then(()=>{
    //   console.log("B");
    // })
    this.uService.login("linh","123").then((res)=>{
      if(res==true)
      console.log("dang nhap thanh cong");
      else console.log("sai gi do");
    });
  }

}
