
import * as $ from 'jquery';

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
    $("#btnHello").click(() => {
        let fullname = $("#fullname");
        let current = fullname.prop('disabled');
        //fullname.prop('disabled', !current);
    });
    $("#btnHello").mouseenter(() => {
        let btn1 = $("#btnHello");
        // btn1.addClass('btn-danger');
        btn1.css('background', 'blue');
    });
    $("#btnHello").mouseleave(() => {
        let btn1 = $("#btnHello");
        //btn1.removeClass('btn-danger');
        btn1.css('background', '');
    });
    $("#btnHide").dblclick(() => {
        let btn1 = $("#btnHello");
        if (btn1.is(":visible"))
            btn1.hide();
        else btn1.show();
    })
})

