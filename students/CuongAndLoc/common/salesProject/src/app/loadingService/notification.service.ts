import { Injectable } from "@angular/core";

declare var $: any;
@Injectable()
export class NotificationService{
    constructor(){}
   success(massage: string){
       $('body').append(`<div class="alert alert-success" id="notificationSuccess"
       style="position:fixed;
       top:20px;
       z-index: 99999;
       display:none;
       ">${massage}</div>`);
       $("#notificationSuccess").slideToggle(`slow`);
       setTimeout(() => {
           $("#notificationSuccess").fadeOut(1000);
           setTimeout(() => {
               $("#notificationSuccess").remove();
           }, 1000);
       }, 5000);
   }
   error(massage:string){
       $('body').append(`<div class="alert alert-danger" id="notificationError"
       style="position:fixed;
       top:20px;
       z-index: 99999;
       display:none;
       ">${massage}</div>`);
       $("#notificationError").slideToggle(`slow`);
       setTimeout(() => {
        $("#notificationError").fadeOut(1000);
        setTimeout(() => {
            $("#notificationError").remove();
        }, 1000);
    }, 5000);
   }
}