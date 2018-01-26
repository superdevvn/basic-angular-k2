
import * as $ from 'jquery';

$(document).ready(function () {
	let func = function(){
        let firstName = $("#firstName");
        let lastName = $("#lastName");
        let fullName = $("#fullName");
        let sum = `${firstName.val()} ${lastName.val()}`;
		fullName.val(sum);
	};

		$("#firstname").keyup(func);
		$("#lastname").keyup(func);

		$("#btnHello").click(() => {
			let fullName = $("#fullname");
			let current = fullName.prop('disabled', )
			fullName.prop('disabled', !current);
		});

		$("#btnHello").mouseenter(() => {
			let btn1 = $("#btnHello");
			btn1.addClass('btn-primary');
			// btn1.css('background','red', 'important');
		});

		$("#btnHello").mouseleave(() => {
			let btn1 = $("#btnHello");
			// btn1.css('background','yellow', 'important');
			btn1.removeClass('btn-primary');
		});

		$("btnHide").dblclick(()=>{
			let btn1 = $("#btnHello");
			if(btn1.is(":visible"))
			{
			btn1.hide();
			}
		}
	)})


