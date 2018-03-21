import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InOutService } from '../thue-phong/in-out.service';
import { InoutDetailServiceService } from './inout-detail-service.service';

@Component({
  selector: 'app-inout-detail',
  templateUrl: './inout-detail.component.html',
  styleUrls: ['./inout-detail.component.css']
})
export class InoutDetailComponent implements OnInit {

  routerSubscription: any;
  id: number;
  list: any = {};
  title: string;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private inoutService: InoutDetailServiceService) { }

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {//
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id > 0) {
        this.title = "BẠN ĐANG CHỈNH SỬA MỘT ĐƠN THUÊ PHÒNG";
        this.inoutService.getInOut(this.id).then(res => {
          this.list = res;
          console.log(this.list);
        });
      }
      else{
        this.title = "BẠN ĐANG THÊM MỚI MỘT ĐƠN THUÊ PHÒNG";
        this.list.FromDate=new Date();
      } 
    });
  }

  back() {
    this.router.navigate(["/main/history"]);
  }
  save(){
    this.inoutService.saveInOut(this.list).then((res:any)=>{
      if(this.id==0) this.router.navigate(["/main/inout-detail",res.id]);
    });
  }

}
