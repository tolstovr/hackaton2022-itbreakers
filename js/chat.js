//caret clicked event
$(".wik .navbar").click(function() {
    $("#arrow").toggleClass("bi-caret-down-fill");
    $("#arrow").toggleClass("bi-caret-up-fill");
    $(".wik .wik-body").slideToggle(250);
    $(".wik .navbar").css("animation", "none");
});
//удалить строки ниже
// $("#arrow").toggleClass("bi-caret-down-fill");
// $("#arrow").toggleClass("bi-caret-up-fill");
// $(".wik .wik-body").slideToggle(250);

//chat history
let chat_history = [];
$(".wik .wik-body .input-bar .submit").click(function() {
    chat_update();
});

$(".wik .wik-body .input-bar").keydown(function(e) {
    if(e.keyCode === 13) {chat_update()};
});

let placeholders = ["Что посмотреть вечером?", "Как дела?", "Что идёт по ТНТ?", "Смотреть новые фильмы"]
$(".wik .wik-body .input-bar input").attr("placeholder", placeholders[Math.floor(Math.random()*placeholders.length)]);

function chat_update() {
    user_input = $(".wik .wik-body .input-bar input").val();
    if (user_input == "") return;
    $(".wik .wik-body .input-bar input").val("");
    chat_history.push(user_input);

    $(".wik .wik-body .input-bar input").attr("placeholder", placeholders[Math.floor(Math.random()*placeholders.length)]);

    chat_history.push('<img src="images/wik.png">'+get_answer(user_input));
    message_space_list = [];
    chat_history.forEach(element => {
        message_space_list.push(`<div class="msg">${element}</div>`)
    });
    message_space_list.forEach(element => {
        console.log($(".wik .wik-body .message-space").html(), element)
        $(".wik .wik-body .message-space").html($(".wik .wik-body .message-space").html()+element);
    });
}

//answers agregator
function get_answer(user_input) {
    return "Пока вот так вот!";
};
