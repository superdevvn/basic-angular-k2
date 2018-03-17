import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhongService } from '../phong/phong.service';
import { RoomDetailService } from './room-detail.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  routerSubscription: any;
  id: number;
  room: any = {};
  title: string = '';
  rooms: any[];
  types: any[];
  listSize: string[]=['One','Two','Three','Four','Five'];
  listTypes: string[]=['VIP','Standard','Suite','Superior','Deluxe'];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private roomdetailService: RoomDetailService,
    private roomlistService: PhongService) { }

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {
      this.roomlistService.getRooms().then((rooms: any) => {
        this.rooms = rooms;
        console.log(this.rooms);
        if (this.id == 0) {
          this.room.Id = rooms[0].Id;
        }
      });
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id > 0) {
        this.title = "BẠN ĐANG CHỈNH SỬA THÔNG TIN MỘT PHÒNG";
        this.roomdetailService.getRoom(this.id).then(res => {
          this.room = res;
          console.log(this.room);

        });
      }
      else this.title = "BẠN ĐANG THÊM MỚI THÔNG TIN MỘT PHÒNG";
    });
    this.roomlistService.getRooms().then((rooms: any) => {
      this.rooms = rooms;
    });
  }

  back() {
    this.router.navigate(["/main/room-list"]);
  }
  saveRoom() {
    this.roomdetailService.saveRoom(this.room).then((res: any) => {
      if(this.id==0) this.router.navigate(["/main/room-detail", res.Id]);
    })
  }

}