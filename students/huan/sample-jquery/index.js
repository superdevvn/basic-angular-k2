"use strict";
exports.__esModule = true;
var $ = require("jquery");
$("#firstName").keyup(function () {
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var fullName = $("#fullName");
    var sum = firstName.val() + " " + lastName.val();
    fullName.val(sum);
});
$("#lastName").keyup(function () {
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var fullName = $("#fullName");
    var sum = firstName.val() + " " + lastName.val();
    fullName.val(sum);
});
$("#btn1").click(function () {
    var fullName = $("#fullName");
    var current = fullName.prop('disabled');
    fullName.prop('disabled', !current);
});
$("#btn1").mouseenter(function () {
    var btn1 = $("#btn1");
    btn1.addClass('btn-danger');
    // btn1.css('background','red');
});
$("#btn1").mouseleave(function () {
    var btn1 = $("#btn1");
    btn1.removeClass('btn-danger');
    //btn1.css('background','');
});
