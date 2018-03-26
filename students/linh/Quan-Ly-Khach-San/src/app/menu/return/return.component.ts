import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InoutDetailServiceService } from '../inout-detail/inout-detail-service.service';
import { PhongService } from '../phong/phong.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  routerSubscription: any;
  id: number;
  list: any = {};
  title: string;
  rooms: any[];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private inoutService: InoutDetailServiceService,
    private roomService: PhongService) { }

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {//
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id > 0) {
        this.title = "BẠN ĐANG THAO TÁC TRẢ PHÒNG";
        this.inoutService.getInOut(this.id).then(res => {
          this.list = res;
          console.log(this.list);
        });
      }
      else {
        this.title = "BẠN ĐANG THÊM MỚI MỘT ĐƠN THUÊ PHÒNG";
        this.list.FromDate = new Date();
      }
    });
    this.roomService.getRooms().then((rooms: any) => {
      this.rooms = rooms;
    })
  }
  save() {
    this.inoutService.saveInOut(this.list).then((res: any) => {
      this.router.navigate(["/main/history"]);
    });
  }
  return() {
    this.list.ToDate = new Date();
    this.inoutService.saveInOut(this.list).then((res: any)=>{
      this.router.navigate(["/main/history"]);
    })
  }

}
