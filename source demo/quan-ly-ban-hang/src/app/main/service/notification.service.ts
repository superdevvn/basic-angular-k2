import * as jquery from 'jquery';
import { Injectable } from '@angular/core';


@Injectable()
export class NotificationSerivce {

    constructor() {}
        success(message:string) { //đây là cách 2 có thể đẩy đi muôn nơi tùy vào thiết kế
            jquery('body').append(`<any class="alert alert-success" id="notificationSuccess" style="
            top: 100px;
            width: 200px;
            right: 20px'
            width: 100px;
            height:50px;
            background-color:green;
            float:right;
            text-align:center;
            margin-right: 50px;
            opacity: 0;
            "><strong>${message}</strong></any>`);
            setTimeout(()=>{
                // $('#notificationSuccess').remove();
            }, 5000);
        }
    

        error(message:string) {
            jquery('body').append(`<any class="bg-danger" id="notificationSuccess" style="
            position: fixed;
            top: 20px;
            right: 20px'
            width: 100px;
            height:50px;
            background-color:red;
            z-index:9999;
            ">${message}</any>`);
            $('#notificationSuccess').fadeIn(1000);
            setTimeout(()=>{
                $('#notificationSuccess').fadeIn(1000);
                $('#notificationSuccess').remove();
            }, 5000);
        }
    


   

} 