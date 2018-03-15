import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var Core:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    Core.init();
  }
  ngAfterViewInit() {
    $.getScript(  "assets/AutoHintTheme/js/utility/utility.js", function( data, textStatus, jqxhr ) {
      $.getScript( "assets/AutoHintTheme/js/demo/demo.js", function( data, textStatus, jqxhr ) {
        $.getScript( "assets/AutoHintTheme/js/main.js", function( data, textStatus, jqxhr ) {
          Core.init();
        });
      });
    });
  }
 
}
