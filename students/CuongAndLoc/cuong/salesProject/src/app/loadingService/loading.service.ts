import { Injectable } from "@angular/core";
import { delay } from "q";
declare var $: any;
@Injectable()
export class LoadingService{
    constructor(){}
    start(){
        $('body').append(`<any id="globalloading"
        style="top:0;
        left:0;
        height: 100vh;
        width: 100vw;
        position: fixed;
        opacity: 0.9;
        background: #FFF;
        z-index: 999999;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(./../../../assets/photo/loading.gif);
        "></any>`);
    }
    stop(){
        $('#globalloading').remove();
    }
     
}