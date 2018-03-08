import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  soA: string = "0";
  soB: string = "0";
  sum: number = 0;
  hidePlay:boolean = true;
 // list: Array<number> = [1, 2, 3];
  currentScore:number;
   AS: string;
   player: any;
  constructor() {
  this.player = new Player();
  }
  ngOnInit() {
this.AS = "0";
  }
  ngAfterViewInit(){  
   
  }
 play() {
    this.soA = String(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
    this.soB = String(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
    this.hidePlay = !this.hidePlay;
  }
  done(){
    this.sum = parseInt(this.soA) + parseInt(this.soB);
    if (this.sum == parseInt(this.AS)) {
      this.player.setscore(parseInt("1"));
    }else{
      this.player.setscore(parseInt("-1"));
    }
    this.currentScore = this.player.getscore();
    
    if(this.player.getscore() > 9){
      alert(`${this.player.getscore()} congratulation you win`);
    }
    if(this.player.getscore() < 0){
      alert(`${this.player.getscore()} this is fucking score, you are loser`);
    }
    this.play();
  }
}
class Player {
  score: number;
  constructor() {
    this.score = 0;
   }
  setscore(newcore: number): void {
    this.score = this.score + newcore;
  }
  getscore(): number {
    return this.score;
  }
}



