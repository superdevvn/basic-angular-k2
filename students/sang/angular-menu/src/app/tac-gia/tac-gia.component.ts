import { Component, OnInit } from '@angular/core'
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-tac-gia',
  templateUrl: './tac-gia.component.html',
  styleUrls: ['./tac-gia.component.css']
})
export class TacGiaComponent{

  constructor(private utilityService: UtilityService) {

  
   }

  ngOnInit() {
    // this.utilityService.testAsync().then(()=>{
    //   console.log("B");
    // });

    // this.utilityService.login("Sangg","123").catch(()=>{
    //   alert("Sai ten dang nhau hoac mat khau");
    // })

  }
}
