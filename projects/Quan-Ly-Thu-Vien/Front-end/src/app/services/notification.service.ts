import { Injectable } from '@angular/core';
declare var $:any;
@Injectable()
export class NotificationService{
    notificationMessage: String='';

    constructor () { 
    }
    success (messageSuccess: String) {
        $('body').append(`<div class = "alert alert-success" id = "notificationSuccess"
        style = "position:fixed;
        top:20px;
        right:20px;
        z-index: 999999;
        display:none;
        "> <strong>Report:</strong> ${messageSuccess}</div>`);
        $('#notificationSuccess').slideToggle('slow');
        setTimeout(() => {
            $('#notificationSuccess').fadeOut(1000);
            setTimeout(()=>{
                $('notificationSuccess').remove();
            },1000)
        },5000);
        messageSuccess = new String;
    }

    info (messageInfo: String) {
        $('body').append(`<div class = "alert alert-info" id = "notificationInfo"
        style = "position:fixed;
        top:20px;
        right:20px;
        z-index: 999999;
        display:none;
        "> <strong>Report:</strong> ${messageInfo}</div>`);
        $('#notificationInfo').slideToggle('slow');
        setTimeout(() => {
            $('#notificationInfo').fadeOut(1000);
            setTimeout(()=>{
                $('notificationInfo').remove();
            },1000)
        },5000);
        messageInfo = new String;
    }
    danger (messageDanger: String) {
        $('body').append(`<div class = "alert alert-danger" id = "notificationDanger"
        style = "position:fixed;
        top:20px;
        right:20px;
        z-index: 999999;
        display:none;
        "> <strong>Report:</strong> ${messageDanger}</div>`);
        $('#notificationDanger').slideToggle('slow');
        setTimeout(() => {
            $('#notificationDanger').fadeOut(1000);
            setTimeout(()=>{
                $('notificationDanger').remove();
            },1000)
        },5000);
        messageDanger = new String;
    }

    warning (messageWarning: String) {
        $('body').append(`<div class = "alert alert-warning" id = "notificationWarning"
        style = "position:fixed;
        top:20px;
        right:20px;
        z-index: 999999;
        display:none;
        "> <strong>Report:</strong> ${messageWarning}</div>`);
        $('#notificationWarning').slideToggle('slow');
        setTimeout(() => {
            $('#notificationWarning').fadeOut(1000);
            setTimeout(()=>{
                $('notificationWarning').remove();
            },1000)
        },5000);
        messageWarning = new String;
    }
    
}
