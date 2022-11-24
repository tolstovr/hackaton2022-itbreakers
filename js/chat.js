//caret clicked event
let wik_opened = false
$(".wik .navbar").click(function() {
    $("#arrow").toggleClass("bi-caret-down-fill");
    $("#arrow").toggleClass("bi-caret-up-fill");
    $(".wik .wik-body").slideToggle(250);
});
//удалить строку ниже
$(".wik .wik-body").slideToggle(250);