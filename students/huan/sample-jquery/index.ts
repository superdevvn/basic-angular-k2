import * as $ from 'jquery';
$(document).ready(function () {

    // $("#firstName").keyup(function () {
    //     let firstName = $("#firstName");
    //     let lastName = $("#lastName");
    //     let fullName = $("#fullName");
    //     let sum = `${firstName.val()} ${lastName.val()}`;

    //     fullName.val(sum);
    // });
    // $("#lastName").keyup(function () {
    //     let firstName = $("#firstName");
    //     let lastName = $("#lastName");
    //     let fullName = $("#fullName");
    //     let sum = `${firstName.val()} ${lastName.val()}`;

    //     fullName.val(sum);
    // });
    let func = function () {
        let firstName = $("#firstName");
        let lastName = $("#lastName");
        let fullName = $("#fullName");
        let sum = `${firstName.val()} ${lastName.val()}`;

        fullName.val(sum);
    }
    $("firstName").keyup(func);
    $("lastName").keyup(func);
    
    $("#btn1").click(() => {
        let fullName = $("#fullName");
        let current = fullName.prop('disabled');
        fullName.prop('disabled', !current);
    });
    $("#btn1").mouseenter(() => {
        let btn1 = $("#btn1");
        btn1.addClass('btn-danger');
        // btn1.css('background','red');
    });
    $("#btn1").mouseleave(() => {
        let btn1 = $("#btn1");
        btn1.removeClass('btn-danger');
        //btn1.css('background','');
    });
    $("#btn2").dblclick(() => {
        debugger
        let btn1 = $("#btn1");
        if (btn1.is(":visible"))
            btn1.hide();
        else btn1.show();
    });
})