@@include('cookie.js')

@@include('menu.js')

// Menu position change script
var menuPosition = Cookies.get("menu_position");
if (menuPosition == null) {
    Cookies.set("menu_position", "1");
    menuPosition = Cookies.get("menu_position");
}
Number.parseInt(menuPosition);
changeMenu(menuPosition);

$(".switch-menu").on("click", function () {
    menuPosition++;
    changeMenu(menuPosition);
}); // Menu position change script


@@include('sort.js')


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

// email check
$("form input[type=email]").on("input", function () {
    var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    let email = $(this).val();
    if (email != "") {
        $(this).css({ "border-color": "#c7cfcf" });
        if (email.search(pattern) == 0) {
            $(".btn_send").prop("disabled", false);
            $(".btn_send").removeClass("disabled");
        } else {
            $(this).css({ "border-color": "#da0b20" });
            $(".btn_send").prop("disabled", true);
            $(".btn_send").addClass("disabled");
        }
    }
}); // email check

@@include('paginator.js')

// Hide/show hint on hover
if (window.matchMedia("(min-width: 1025px)").matches) {
    $(".uptime-hint__icon").hover(
        function () {
            $(".uptime-hint").css({ display: "block" });
        },
        function () {
            $(".uptime-hint").css({ display: "none" });
        }
    );
} // Hide/show hint on hover

if (window.matchMedia("(max-width: 1024px)").matches) {
    $(".block-warnings").appendTo(".content_uptime .content-top");
    $(".uptime .content-top").append('<span class="uptime_mobile">Что такое UpTime?</span>');
    $(".uptime-hint__icon").appendTo(".content_uptime .content__title");
    $(".sait-plight").css({ display: "none" });
    $(".uptime-hint").appendTo(".content_uptime .content-top");
    // Hide/show hint
    $(".uptime-hint__icon").click(function () {
        if (!$(this).hasClass("clicked")) {
            $(this).addClass("clicked");
            $(".sait-plight").css({ display: "block" });
        } else {
            $(this).removeClass("clicked");
            $(".sait-plight").css({ display: "none" });
        }
    });
    // Hide/show hint

    $(".more-sait-error").appendTo(".block-warnings ul");

    // Mobile adaptive
    var site_info = $(".list li a");

    for (var i = 0; i < site_info.length; i++) {
        var name_client = site_info.eq(i).find(".list__item__col_client span").text();
        var site_url = site_info.eq(i).find(".list__item__col_url span").text();
        site_info
            .eq(i)
            .find(".list__item__col_url span")
            .html(name_client + ", " + site_url);

        site_info.eq(i).find(".list__item__col_test").prepend("<span>Поверяется</span>");
        site_info.eq(i).find(".list__item__col_uptime").prepend("<span>Uptime</span>");
        site_info.eq(i).find(".list__item__col_bitrix").prepend("<span>CMS Bitrix</span>");
        site_info.eq(i).find(".list__item__col_access").prepend("<span>Доступность</span>");
    }
} // Mobile adaptive


// More errors site show/hide
if ($(".block-warnings ul li").length > 4) {
    let errors_site = $(".block-warnings ul li");
    var error_site_count = errors_site.length;

    for (var i = 3; i < error_site_count; i++) {
        errors_site.eq(i).hide();
    }
    $(".more-sait-error__span").html("+" + String(error_site_count - 3));
    $(".more-sait-error__span").show();

    $(".more-sait-error").click(function () {
        if (!$(this).hasClass("clicked")) {
            $(this).addClass("clicked");
            for (var i = 3; i < error_site_count; i++) {
                errors_site.eq(i).show();
            }

            $(".more-sait-error__span").html("Свернуть");

            if (window.matchMedia("(min-width: 1025px)").matches) {
                $(".block-warnings ul").css({ "border-bottom": "1px solid #E9EAEA" });
            }
            $(".more-sait-error__span").css({ color: "#919797", background: "transparent" });
            $(".more-sait-error").css({ display: "flex", "justify-content": "center" });
            $(".hide-arrow").show();
        } else {
            $(this).removeClass("clicked");

            for (var i = 3; i < error_site_count; i++) {
                errors_site.eq(i).hide();
            }

            $(".more-sait-error__span").html("+" + String(error_site_count - 3));
            $(".block-warnings ul").css({ "border-bottom": "0" });
            $(".more-sait-error__span").css({ color: "#ed5b4e", background: "#ee5c4f33" });
            $(".more-sait-error").css({ display: "block", "justify-content": "" });
            $(".hide-arrow").hide();
        }
    });
} // More errors site show/hide


$(".uptime_mobile").click(function () {
    if (!$(this).hasClass("clicked")) {
        $(this).addClass("clicked");
        $(".uptime-hint").css({ display: "block", position: "inherit", margin:"0 auto" });
        $(".uptime_mobile").css({"margin-bottom": "14px"});
    } else {
        $(this).removeClass("clicked");
        $(".uptime-hint").css({ display: "none"});
    }
});

$("img.exclamation").closest("li").css({ background: "#FEF7F6" });


$(".input-field__input").on("input", function () {
    if ($(this).val()) {
        $(this).css({ border: "0", background: "#F6F6F6" });
    }
});


$('body').on('input', '.input_number', function(){
	if (this.value.length > this.maxLength){
		this.value = this.value.slice(0, this.maxLength);
    }
    if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
    }
});

$( ".form-create-edit" ).submit(function(event) {
    var inputsLen = $(".input_requred").length;
    for (let i = 0; i < inputsLen; i++){
        input = $(".input_requred").eq(i);
        if (!input.val()) {
            if (!input.hasClass("not_fill")) {
                input.addClass("not_fill");
                $('<p class="input-field__text">Это обязательное поле. Заполните его, пожалуйста</p>').insertAfter(input.closest(".input-field"));
            }
            

            input.css({ border: "1px solid #DA0B20", background: "rgba(218, 11, 32, 0.05)" })
            input.closest(".input-field").css({ "margin-bottom": "0" });
            event.preventDefault();
        }
        else {
            $(".input-field__text").eq(i).remove();
            input.closest(".input-field").css({ "margin-bottom": "2.5%" });
        }
    }
});

$('.switch-btn').click(function(){
    $(this).toggleClass('switch-on');
    if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
});

(function($) {
  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    if ($(".tabs__content").eq(0).hasClass("active")) {
        $(".btn_add").not(".btn_delete").hide();
        $(".btn_delete").css({ "display": "flex" });
    }else {
        $(".btn_add").css({ "display": "flex" });
    }
    });
  });
})(jQuery);

if (window.matchMedia("(max-width: 1025px)").matches) {
    $(".tabs").show();

    if ($(".tabs__content").eq(0).hasClass("active")) {
        $(".btn_add").css({ "display": "none" });
        $(".btn_delete").show();
    }else {
        $(".btn_add").css({ "display": "flex" });
    }

    $(".tabs__content").eq(0).append($(".client__data"));
    $(".tabs__content").eq(1).append($(".list_client"));
}

$(".btn_delete").click(function(){
    $(".modal-wrapper ").css({ "display": "flex" });
});

$(".btn_delete, .cancel-button_form").click(function(){
    $(".modal-wrapper").css({ "display": "flex" });
});

$(".cancel-button").click(function(){
    $(".modal-wrapper").css({ "display": "none" });
    $(".modal-wrapper_exit").css({ "display": "none" });
});

$(".menu__item:last-child,.menu__elem_last").click(function(){
    $(".modal-wrapper_exit").css({ "display": "flex" });
});