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
    var pattern = /^[a-z0-9_.-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    let email = $(this).val();
    if (email != "") {
        $(this).css({ "border-color": "#c7cfcf" });
        if (email.search(pattern) == 0) {
            $(".btn_send").prop("disabled", false);
            $(".btn_send").removeClass("disabled");
        } else {
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

$(".popup_access").hide();

$(".form-create-edit").submit(function (event) {
    var inputsLen = $(".input_requred").length;
    for (let i = 0; i < inputsLen; i++){
        input = $(".input_requred").eq(i);

        $('.input-field__text').show();
        if (!input.val()) {
            if (!input.hasClass("not_fill")) {
                input.addClass("not_fill");
                $('<p class="input-field__text">Это обязательное поле. Заполните его, пожалуйста</p>').insertAfter(input.closest(".input-field"));
            }
            
            input.css({ border: "1px solid #DA0B20", background: "rgba(218, 11, 32, 0.05)" })
            input.closest(".input-field").css({ "margin-bottom": "0" });
        }
        
        else {
            if (input.hasClass("not_fill")) {
                $(input.closest(".input-field").next()).remove();
                input.removeClass("not_fill");
            }
            input.closest(".input-field").css({ "margin-bottom": "2.5%" });
        }
    }
    if ($(this).find(".add_site").length) {
        if ($(this).find(".input-field__text").length) {
            $(".popup_access_wrong").show();
            $(".popup_access_success").hide();
        }
        else {
            $(".popup_access_success").show();
            $(".popup_access_wrong").hide();
        }
    }
    event.preventDefault();
});

$(".popup_access__close").click(function(){
    $(this).closest(".popup_access").hide();
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
            
        if ($("ul.tabs__caption li").eq(1).hasClass("active")) {
            $(".input_choice").show();
        }
        else {
            $(".input_choice").hide();
        }
        var elActive = $("ul.tabs__caption li").index($(this));
        Cookies.set("activeel", elActive);
    });
  });
})(jQuery);

var elAcives = Number(Cookies.get("activeel"));
if (!elAcives){
    elAcives = 0;
}

$(".tabs__content").removeClass("active");
$(".tabs__content").eq(elAcives).addClass("active");
$("ul.tabs__caption li").removeClass("active");
$("ul.tabs__caption li").eq(elAcives).addClass("active");


if (window.matchMedia("(max-width: 1024px)").matches) {
    var text_date = $(".content__title").html();
    if (text_date) {
        $(".content__title").html(text_date.replace('данных ', ''));
    }
    $(".input_choice").hide();
    $(".input_choice").insertAfter(".tabs__caption");
    $(".btn_show").appendTo(".input_choice");
    $("<span class='defis'>-</span>").insertAfter($(".datepicker-here_first"));
    $(".btn_show").html('<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3654 2.09419C14.3544 1.11435 13.1654 0.41711 11.8976 0V2.6347C12.508 2.92964 13.0866 3.31343 13.594 3.80705C16.1283 6.26775 16.1283 10.2686 13.594 12.728C11.0596 15.1838 6.93957 15.1838 4.40141 12.728C1.86961 10.2661 1.86961 6.26775 4.40141 3.80705C4.40777 3.79965 4.42811 3.78731 4.43702 3.7762H4.43956L5.94135 5.23115L5.93244 0.610856L1.17403 0.604686L2.66946 2.05593C2.66056 2.07074 2.64657 2.08555 2.63512 2.09419C-0.878375 5.50264 -0.878375 11.0324 2.63512 14.4409C6.15371 17.853 11.848 17.853 15.3654 14.4409C18.8763 11.0324 18.8801 5.50264 15.3654 2.09419Z" fill="white"/></svg>');
    $(".btn_hide").html('<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1818 14.4H10.9753L17.7604 7.76567C18.0799 7.4533 18.0799 6.94674 17.7604 6.63431L11.2149 0.23432C10.8954 -0.0781065 10.3774 -0.0781065 10.0578 0.23432L0.239672 9.83425C0.0861817 9.98428 0 10.1877 0 10.4C0 10.6122 0.0861817 10.8156 0.239672 10.9657L5.14876 15.7657C5.30219 15.9157 5.51028 15.9999 5.72726 15.9999L8.99999 16L9.00091 15.9999L17.1818 16C17.6336 16 18 15.6418 18 15.2C18 14.7582 17.6336 14.4 17.1818 14.4ZM10.6363 1.93138L16.0247 7.20002L11.2909 11.8286L5.90252 6.56002L10.6363 1.93138Z" fill="white"/></svg>');
    $(".btn_hide").insertAfter(".btn_show");
    $(".datepicker-here_second").attr("data-position", "bottom left-new");

    var site_info = $(".list li a");

    for (var i = 0; i < site_info.length; i++) {
        site_info.eq(i).find(".site__item__col_date").prepend('<span class="client__data__span_name">Дата и время</span>');
        site_info.eq(i).find(".site__item__col_status").prepend('<span class="client__data__span_name">Статус ошибки</span>');
    }
} // Mobile adaptive


if (window.matchMedia("(max-width: 1025px)").matches) {
    $(".tabs").show();

    if ($(".tabs__content").eq(0).hasClass("active")) {
        $(".btn_add").css({ "display": "none" });
        $(".btn_delete").show();
    }else {
        $(".btn_add").css({ "display": "flex" });
    }

    // $(".tabs__content").removeClass("active");
    // $(".tabs__content").eq(1).addClass("active");
    // $("ul.tabs__caption li").removeClass("active");
    // $("ul.tabs__caption li").eq(1).addClass("active");
    
    if (Cookies.get("minDate")) {
        $(".datepicker-here_first").prop("disabled", true);
        $(".datepicker-here_second").prop("disabled", true);
        $(".datepicker-here").css({width:"83px"})
        $(".defis").css({padding:"0 1px 0 2px"})
    }

    if ($("ul.tabs__caption li").eq(1).hasClass("active")) {
        $(".input_choice").show();
    }
    else {
        $(".input_choice").hide();
    }

    $(".tabs__content").eq(0).append($(".client__data:not(.client__data_notific)"));
    $(".tabs__content").eq(1).append($(".list_client"));
    $(".tabs__content").eq(2).append($(".client__data_notific"));
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

$(".menu__items_bottom .menu__item:last-child,.menu__elem_last").click(function(){
    $(".modal-wrapper_exit").css({ "display": "flex" });
});


jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});


$(".select__item").click(function () {
    $(".submit-button_user").removeClass("disabled");
    $(".submit-button_user").prop("disabled", false);

});

$(".select-user__selection").on("change", function () {
    var select = $(".select-user__selection").val();
    if (select != "Выберите пользователя") {
        $(".submit-button_user").removeClass("disabled");
        $(".submit-button_user").prop("disabled", false);
    }
    else {
        $(".submit-button_user").addClass("disabled");
        $(".submit-button_user").prop("disabled", true);
    }

});


$(".admin svg").click(function () {
    $(this).closest(".admin").css({ "display": "none" });
});


var Circle = function(sel){
    var circles = document.querySelectorAll(sel);
    [].forEach.call(circles,function(el){
        var valEl = parseFloat(el.innerHTML.replace(',', '.'));
        $(".circle__span").attr('data-before',valEl+"%");
        valEl = valEl*440/100 - 17;
        el.innerHTML = '<svg class="circle__svg"><defs><linearGradient id="gradient" x1="20%" y1="0%" x2="3%" y2="100.96%" ><stop offset="0%" stop-color="#EA495C" /><stop offset="100%" stop-color=" #F37C35" /></linearGradient></defs><circle  class="circle" transform="rotate(-90)" r="70" cx="-80" cy="80" /><circle class="circle_color" style="stroke-dasharray:'+valEl+'px 440px;" r="70" rx="20" ry="20" cx="-80" cy="80" stroke="url(#gradient)" stroke-width="17" fill="none" transform="rotate(-90)"/></svg>';
    });
};
Circle('.circle__span');


if (Cookies.get("minDate")) {

    $(".btn_show").show();
    $(".btn_hide").show();
    $(".btn_show").attr("disabled", true);
    $(".btn_show").addClass("disabled");
    $('.choice_period').hide();
    $(".datepicker-here_first").html($(".datepicker-here_first").val(Cookies.get("minDate")));
    $(".datepicker-here_second").html($(".datepicker-here_second").val(Cookies.get("maxDate")));

    if (window.matchMedia("(min-width: 1024px)").matches) {
        $(".choice_period_val1").html(Cookies.get("minDate"));
        $(".choice_period_val2").html(Cookies.get("maxDate"));
        $(".choice_period").show();
        $(".datepicker_border").hide();
        $(".datepicker_border_second").hide();
    }
} else {
    $('.choice_period').hide();
    $(".btn_show").hide();
    $(".btn_hide").hide();
}
     
$('.datepicker-here_first').click(function () {
    var vals = $('.datepicker-here_second').val();
    var hisDatepicker = $(".datepicker-here_second").datepicker().data('datepicker');
    hisDatepicker.hide();
    $('.datepicker-here_second').val(vals);


    // $(".datepicker-here_first").val("Выбрать с -");

    $(".close").on("click", function () {
        if ($('.datepicker-here_first').val() != "Выбрать с -") {
            var myDatepicker = $(".datepicker-here_first").datepicker().data('datepicker');
            myDatepicker.hide();
            $('.datepicker-here_second').attr("disabled", false);
        }
    });
});


$('.datepicker-here_second').click(function () {
    var vals = $('.datepicker-here_first').val();
    var hisDatepicker = $(".datepicker-here_first").datepicker().data('datepicker');
    hisDatepicker.hide();
    $('.datepicker-here_first').val(vals);

    $(".close").on("click", function () {
        if ($('.datepicker-here_second').val() != "Выбрать по") {
            var myDatepicker = $(".datepicker-here_second").datepicker().data('datepicker');
            myDatepicker.hide();
            $('.datepicker-here_first').attr("disabled", false);
        }
    });
});

$(".btn_hide").click(function () {
    var fDatepicker = $(".datepicker-here_first").datepicker().data('datepicker');
    var sDatepicker = $(".datepicker-here_second").datepicker().data('datepicker');
    fDatepicker.clear();
    sDatepicker.clear();
    fDatepicker.hide();
    sDatepicker.hide();

    $(".datepicker-here_first").html($(".datepicker-here_first").val("Выбрать с -"));
    $(".datepicker-here_second").html($(".datepicker-here_second").val("Выбрать по"));
    $(".datepicker_border").show();
    $(".input_choice *").show();
    $(".btn_show").hide();
    $(".btn_hide").hide();
    $(".choice_period").hide();

    Cookies.set("minDate", "");
    Cookies.set("maxDate", "");

    if ($('.btn_show').hasClass("disabled")) {
        document.location.reload();
    }

    $(".btn_show").attr("disabled", false);
    $(".btn_show").removeClass("disabled");
});


$(".btn_show").click(function () {
    if (!$('.btn_show').hasClass("disabled")) {
        var select = Number($(".selection").val());
        Cookies.set("select", select);

        document.location.reload();
    }
});

