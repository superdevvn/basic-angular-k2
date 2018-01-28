"use strict";
exports.__esModule = true;
var $ = require("jquery");
$("#firstname").keyup(function () {
    var firstname = $("#firstname");
    var lastname = $("#lastname");
    var fullname = $("#fullname");
    var sum = firstname.val() + " " + lastname.val();
    fullname.val(sum);
});
$("#lastname").keyup(function () {
    var firstname = $("#firstname");
    var lastname = $("#lastname");
    var fullname = $("#fullname");
    var sum = firstname.val() + " " + lastname.val();
    fullname.val(sum);
});
$("#btn1").click(function () {
    var fullname = $("#fullname");
    var current = fullname.prop('disabled');
    fullname.prop('disabled', !current);
});
$("#btn1").mouseenter(function () {
    var btn1 = $("#btn1");
    btn1.addClass('btn-info');
    //btn1.css('background','blue');
});
$("#btn1").mouseleave(function () {
    var btn1 = $("#btn1");
    btn1.removeClass('btn-info');
    // btn1.css('background','');
});
