$(".tip1").hide();
$(".tip2").hide();
$(".tip3").hide();

//caret clicked event
$(".wik .navbar").click(function() {
    $("#arrow").toggleClass("bi-caret-down-fill");
    $("#arrow").toggleClass("bi-caret-up-fill");
    $(".wik .wik-body").slideToggle(250);
    $(".wik .navbar").css("animation", "none");
});

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
    chat_history = []
    user_input = $(".wik .wik-body .input-bar input").val();
    if (user_input == "") return;
    $(".wik .wik-body .input-bar input").val("");
    chat_history.push(user_input);
    

    $(".wik .wik-body .input-bar input").attr("placeholder", placeholders[Math.floor(Math.random()*placeholders.length)]);

    chat_history.push("<img src='images/wik.png'>"+get_answer(user_input));
    message_space_list = [];
    chat_history.forEach(element => {
        message_space_list.push(`<div class="msg">${element}</div>`)
    });
    message_space_list.forEach(element => {
        $(".wik .wik-body .message-space").html($(".wik .wik-body .message-space").html()+element);
    });
}

//answers agregator
function get_answer(user_input) {
    if (user_input.toLowerCase() == "Привет, Вик!".toLowerCase()) return "Хелло!";
    if (user_input.toLowerCase() == "Как дела?".toLowerCase()) return "Пока не родила:)";
    if (user_input.toLowerCase() == "Тупой".toLowerCase()) return "Не понял вас. Мне кажется, проблема не во мне...";
    
    if (user_input.toLowerCase() == "Что мне посмотреть?".toLowerCase()) return "Есть много фильмов. Какое у вас настроение на вечер?";
    if (user_input.toLowerCase() == "Грустненько:(".toLowerCase()) return "Подобрал специально для вас:<div class='film'><img src='https://www.film.ru/sites/default/files/movies/posters/1613089-1576645.jpeg'><ul><li>Маска</li><li>1994</li><li>Джим Керри</li><li><a href='#'>Смотреть на Wink</a></li></ul></div><div class='film'><img src='https://images.iptv.rt.ru/images/c6tl5ejir4sslltqt4p0.jpg'><ul><li>Брюс всемогущий</li><li>2003</li><li>Джим Керри</li><li><a href='#'>Смотреть на Wink</a></li></ul></div>";
    if (user_input.toLowerCase() == "Спасибо, Вик!".toLowerCase()) return "Цель моего существования - помогать людям!";
    
    if (user_input.toLowerCase() == "Как приобрести подписку".toLowerCase()) {
        $(".tip1").fadeIn(250);
        return "Надеюсь, всё было понятно!"
    };
    
    if (user_input.toLowerCase() == "Любое число от 1 до 20".toLowerCase()) return get_random("Скажем, 17");
    if (user_input.toLowerCase() == "".toLowerCase()) return get_random("Скажем, 17");
       
    return "Бип-буп! Команда не распознана!";
};

$(".tip1 .close, .tip1").click(function() {
    $(".tip1").fadeOut(250);
    $(".tip2").fadeIn(250);
});

$(".tip2 .close, .tip2").click(function() {
    $(".tip2").fadeOut(250);
    $(".tip3").fadeIn(250);
});

$(".tip3 .close, .tip3").click(function() {
    $(".tip3").fadeOut(250);
});