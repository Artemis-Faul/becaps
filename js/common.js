$(".eye").on("click", function () {
    $(this).toggleClass("eye_active");
    if ($(".password_input").attr("type") == "password") {
        $(".password_input").attr("type", "text");
    } else {
        $(".password_input").attr("type", "password");
    }
});

$("form input[name=login],form input[name=password]").keyup(function () {
    let login = $(this).val();
    if (login != "") {
        $(this).css({ "border-color": "#c7cfcf" });
    } else {
        $(this).css({ "border-color": "#da0b20" });
    }
});

$("form input[name=login]").keyup(function () {
    let login = $(this).val();
    let password = $("form input[name=password]").val();

    if (login != "" && password != "") {
        $(".btn_send").prop("disabled", false);
        $(".btn_send").removeClass("disabled");
    } else {
        $(".btn_send").prop("disabled", true);
        $(".btn_send").addClass("disabled");
    }
});

$("form input[name=password]").keyup(function () {
    let password = $(this).val();
    let login = $("form input[name=login]").val();

    if (login != "" && password != "") {
        $(".btn_send").prop("disabled", false);
        $(".btn_send").removeClass("disabled");
    } else {
        $(".btn_send").prop("disabled", true);
        $(".btn_send").addClass("disabled");
    }
});

$("form input[type=email]").keyup(function () {
    let email = $(this).val();
    if (email != "") {
        $(this).css({ "border-color": "#c7cfcf" });
        if ((email.match(/.+?\@.+/g) || []).length == 1) {
            $(".btn_send").prop("disabled", false);
            $(".btn_send").removeClass("disabled");
        }
    } else {
        $(this).css({ "border-color": "#da0b20" });
        $(".btn_send").prop("disabled", true);
        $(".btn_send").addClass("disabled");
    }
});

var counter_menu = 0;

$(".switch-menu").on("click", function () {
    if (counter_menu % 2 == 0) {
        $(".menu").css({ right: "0" });
        $(".menu").css({ left: "auto" });
        $(".content").css({ "margin-right": "7%", "margin-left": "7%" });
        $(".menu__item_active").css({ "border-right": "5px solid red", "border-left": "0px" });
        $(".switch-menu svg").html(
            '<svg class="menu__item__icon" width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="36" height="25" rx="2" stroke="#919797" stroke-width="2"/><path d="M29 1L29 26" stroke="#919797" stroke-width="2"/></svg>'
        );
    } else {
        $(".content").css({ "margin-left": "calc(7vw + 8%)", "margin-right": "7%" });
        $(".menu").css({ left: "0" });
        $(".switch-menu svg").html(
            '<svg class="menu__item__icon" width="38" height="27" viewBox="0 0 38 27" fill="none"><rect x="1" y="1" width="36" height="25" rx="2" stroke="#919797" stroke-width="2" /><path d="M9 1L9 26" stroke="#919797" stroke-width="2" /></svg>'
        );
    }
    counter_menu++;
});

$(document).ready(function () {
     $(".list li:not(:last)").hide();

     var per = $(".selection").val();
     per = Number.parseInt(per) + 1;
     for (var i = 0; i < per; i++) {
         $(".list li").eq(i).show();
     }
});

$(".selection").on("change", function () {
    $(".list li:not(:last)").hide();

    var per = $(".selection").val();
    for (var i = 0; i < per; i++) {
        $(".list li").eq(i).show();
    }
});
