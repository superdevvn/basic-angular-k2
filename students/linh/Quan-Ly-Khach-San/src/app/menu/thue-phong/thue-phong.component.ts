import { Component, OnInit } from '@angular/core';
import { InOutService } from './in-out.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thue-phong',
  templateUrl: './thue-phong.component.html',
  styleUrls: ['./thue-phong.component.css']
})
export class ThuePhongComponent implements OnInit {
  listInOuts: any[];
  constructor(private inoutService: InOutService, private router: Router) { }

  ngOnInit() {
    this.inoutService.getInOuts().then((listInOuts: any[]) => {
      this.listInOuts = listInOuts;
    });
  }
  create() {
    this.router.navigate(["/main/inout-detail", 0]);
  }
  detail(list) {
    this.router.navigate(["/main/inout-detail", list.Id]);
  }

  delete(list) {
    this.inoutService.deleteInOut(list.Id).then(() => {
      this.inoutService.getInOuts().then((listInOuts: any[]) => {
        this.listInOuts = listInOuts;
      });
    });
  }
  toReturn(list) {
    this.router.navigate(["/main/return", list.Id]);
  }

}
