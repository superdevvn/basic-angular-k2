import * as $ from 'jquery'
$(document).ready(function () {
    let func = function () {
        let firstname = $("#firstname");
        let lastname = $("#lastname");
        let fullname = $("#fullname");
        let sum = `${firstname.val()} ${lastname.val()}`;
        fullname.val(sum);
    }
    $("#firstname").keyup(func);
    $("#lastname").keyup(func);
    $("#btn1").click(() => {
        let fullname = $("#fullname");
        let current = fullname.prop('disabled');
        //fullname.prop('disabled', !current);
    });
    $("#btn1").mouseenter(() => {
        let btn1 = $("#btn1");
        // btn1.addClass('btn-danger');
        btn1.css('background', 'blue');
    });
    $("#btn1").mouseleave(() => {
        let btn1 = $("#btn1");
        //btn1.removeClass('btn-danger');
        btn1.css('background', '');
    });
    $("#btn2").dblclick(() => {
        let btn1 = $("#btn1");
        if (btn1.is(":visible"))
            btn1.hide();
        else btn1.show();
    })
})
