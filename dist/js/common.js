function changeMenu(menuPosition) {
    if (menuPosition % 2 == 0) {
        $(".menu").css({ right: "0" });
        $(".menu").css({ left: "auto" });
        if (window.matchMedia("(min-width: 1025px)").matches) {
            $(".content").css({ "margin-left": "5.2083%" });
            $(".content_uptime").css({ "margin-right": "1.6666%", "margin-left": "2.2083%" });
            $(".content_client").css({ "margin-right": "1.6666%", "margin-left": "5.2083%" });
        } else if (window.matchMedia("(min-width: 768px)").matches) {
            $(".content").css({ "margin-right": "0", "margin-left": "5.2083%" });  
        } else {
            $(".content").css({ "margin-right": "0", "margin-left": "0" });
        }
        $(".menu__item_active").css({ "border-right": "5px solid red", "border-left": "0px" });
        $(".switch-menu svg").html(
            '<svg class="menu__item__icon" width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="36" height="25" rx="2" stroke="#919797" stroke-width="2"/><path d="M29 1L29 26" stroke="#919797" stroke-width="2"/></svg>'
        );
        if (window.matchMedia("(min-width: 1920px)").matches) {
            $(".content_uptime").css({ "margin-right": "1.6666%", "margin-left": "5.2083%" });
        }
        Cookies.set("menu_position", "2");
    } else {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            $(".content").css({ "margin-right": "0", "margin-left": "11.4583%" });
            $(".content_uptime").css({ "margin-left": "11.4583%", "margin-right": "1.6666%" });
            if (window.matchMedia("(max-width: 1600px)").matches) {
                $(".content_uptime").css({ "margin-left": "8.4583%" });
                $(".content_client").css({ "margin-left": "11.4583%" });
            }
        } else if (window.matchMedia("(min-width: 768px)").matches) {
            $(".content").css({ "margin-right": "0", "margin-left": "15.4583%" });
            // $(".content_uptime").css({ "margin-left": "11.4583%", "margin-right": "1.6666%" });
        } else {
            $(".content").css({ "margin-right": "0", "margin-left": "0" });
        }
        $(".menu").css({ left: "0" });
        $(".switch-menu svg").html(
            '<svg class="menu__item__icon" width="38" height="27" viewBox="0 0 38 27" fill="none"><rect x="1" y="1" width="36" height="25" rx="2" stroke="#919797" stroke-width="2" /><path d="M9 1L9 26" stroke="#919797" stroke-width="2" /></svg>'
        );
        Cookies.set("menu_position", "1");
    }
}


var counter = 0;
var scrollPos = 0;

$(".lmblock").click(function () {
    if (counter % 2 == 0) {
        $("#menuHand").css({ "margin-top": "calc(100vh + 60px)" });
        setTimeout(function () {
            $("#menuHand li:nth-child(1) a").css({ "margin-top": "0" });
        }, 100);
        setTimeout(function () {
            $("#menuHand li:nth-child(2) a").css({ "margin-top": "0" });
        }, 200);
        setTimeout(function () {
            $("#menuHand li:nth-child(3) a").css({ "margin-top": "0" });
        }, 300);
        setTimeout(function () {
            $("#menuHand li:nth-child(4) a").css({ "margin-top": "0" });
        }, 400);
        setTimeout(function () {
            $("#menuHand li:nth-child(5) a").css({ "margin-top": "0" });
        }, 500);
        $("#menuHand li").css({ "display": "flex", "align-items": "center"});
        $("#menuHand").css({ "display": "flex", "height": "100vh" });;
        $("#lm1, #lm2, #lm3").css({ background: "#ed008c" });
        $(".lm-title").css({ color: "#ed008c" });
    } else {
        setTimeout(function () {
            $("#menuHand").css({ height: "0vh" });
            $("#menuHand li").css({ display: "none" });
            setTimeout(function () {
                $(".lm-title").css({ color: "#ffffff" });
            }, 300);
            $("#menuHand li").css({ display: "none" });
        }, 200);
    }
    counter++;
});

(function () {
    "use strict";

    var toggles = document.querySelectorAll(".lmblock");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            this.classList.contains("is-active") === true
                ? this.classList.remove("is-active")
                : this.classList.add("is-active");
        });
    }
})();

$(".menu__item").click(function () {
    Cookies.set("page", 1);
});

$("#menuHand a").click(function () {
    Cookies.set("page", 1);
});

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


jQuery.fn.sortElements = (function () {
    var sort = [].sort;

    return function (comparator, getSortable) {
        getSortable =
            getSortable ||
            function () {
                return this;
            };

        var placements = this.map(function () {
            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,
                nextSibling = parentNode.insertBefore(document.createTextNode(""), sortElement.nextSibling);

            return function () {
                if (parentNode === this) {
                    throw new Error("You can't sort elements if any one is a descendant of another.");
                }

                parentNode.insertBefore(this, nextSibling);
                parentNode.removeChild(nextSibling);
            };
        });

        return sort.call(this, comparator).each(function (i) {
            placements[i].call(getSortable.call(this));
        });
    };
})();

var i = 0;

function sortRecords(arrowData, arrowDirect) {
    $(".list li").sortElements(function (a, b) {
        var img = 0;
        if (arrowData == "Название") {
            (a = $(a).find(".list__item__col_name span")), (b = $(b).find(".list__item__col_name span"));
        } else if (arrowData == "Название-сайта") {
            (a = $(a).find(".list__item__col_name-sait span")), (b = $(b).find(".list__item__col_name-sait span"));
        } else if (arrowData == "ИНН") {
            (a = $(a).find(".list__item__col_inn span")), (b = $(b).find(".list__item__col_inn span"));
        } else if (arrowData == "Сайт") {
            (a = $(a).find(".client_item__col_name-sait span")), (b = $(b).find(".client_item__col_name-sait span"));
        } else if (arrowData == "Количество") {
            (a = $(a).find(".list__item__col_count-sait span")), (b = $(b).find(".list__item__col_count-sait span"));
        } else if (arrowData == "Клиенты") {
            (a = $(a).find(".list__item__col_client span")), (b = $(b).find(".list__item__col_client span"));
        } else if (arrowData == "Uptime") {
            (a = $(a).find(".list__item__col_uptime span")), (b = $(b).find(".list__item__col_uptime span"));
        } else if (arrowData == "Проверяется") {
            (a = $(a).find(".list__item__col_test img")), (b = $(b).find(".list__item__col_test img"));
            img = 1;
        } else if (arrowData == "Bitrix") {
            (a = $(a).find(".list__item__col_bitrix img")), (b = $(b).find(".list__item__col_bitrix img"));
            img = 1;
        } else if (arrowData == "Доступ") {
            (a = $(a).find(".list__item__col_access img")), (b = $(b).find(".list__item__col_access img"));
            img = 1;
        }

        $(".arrow").removeClass("arrow_active");
        if (arrowDirect == "true") {
            $('[data-title="' + arrowData + '"]')
                .filter(".arrow_bottom")
                .addClass("arrow_active");
            if (img) {
                return $(a).attr("alt") < $(b).attr("alt") ? 1 : -1;
            }
            return $(a).text() < $(b).text() ? 1 : -1;
        }
        $('[data-title="' + arrowData + '"]')
            .not(".arrow_bottom")
            .addClass("arrow_active");

        if (img) {
            return $(a).attr("alt") > $(b).attr("alt") ? 1 : -1;
        }

        return $(a).text() > $(b).text() ? 1 : -1;
    });
}

$(document).ready(function () {
    arrowData = Cookies.get("arrow");
    arrowDirect = Cookies.get("arrow_direct");

    sortRecords(arrowData, arrowDirect);
});


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

// Selection records on site ready
function SortPages(select, arrowDir, arrowDat) {

    $(".list li").show();

    var lenLi = $(".list li").length;
    $(".select__text")
        .eq(1)
        .text("из " + lenLi);
    $(".content__title_number").text(lenLi);

    cookieSort = Cookies.get("arrow");

    if ((arrowDir, arrowDat)) {
        sortRecords(arrowDir, arrowDat);
    } else if (cookieSort) {
        arrowDirect = Cookies.get("arrow_direct");
        sortRecords(cookieSort, arrowDirect);
    }

    var page = Number(Cookies.get("page"));
    if (!page) {
        page = 1;
        Cookies.set("page", 1);
    }
    showRecords(page, select);
}

function showRecords(page, select) {
    $(".list li").hide();

    for (let i = (page - 1) * select; i < select * page; i++) {
        $(".list li").eq(i).show();
    }
}

function genNumbers(select) {
    numbers = Math.ceil($(".list li").length / select);
    var page = Number(Cookies.get("page"));
    if (!page) {
        page = 1;
        Cookies.set("page", 1);
    }
    
    $(".numbers a").remove(".number-page");

    if (numbers > 4) {
        $(".numbers").append('<a href="" class="number-page">1</a>');
        if (page == 1) {
            $(".numbers").append('<a href="" class="number-page">' + (page+1) + "</a>");
            $(".numbers").append('<a href="" class="number-page">' + (page + 2) + "</a>");
            $(".numbers").append('<p class="number-page_ellipsis">...</p>');
            $(".numbers").append('<a href="" class="number-page">' + numbers + "</a>");
        }
        else if (page + 2 < numbers) {
             $(".numbers").append('<a href="" class="number-page">' + page + "</a>");
             $(".numbers").append('<a href="" class="number-page">' + (page + 1) + "</a>");
             $(".numbers").append('<p class="number-page_ellipsis">...</p>');
             $(".numbers").append('<a href="" class="number-page">' + numbers + "</a>");
         } else {
            $(".numbers").append('<p class="number-page_ellipsis">...</p>');
            $(".numbers").append('<a href="" class="number-page">' + (numbers - 2) + "</a>");
             $(".numbers").append('<a href="" class="number-page">' + (numbers - 1) + "</a>");
             $(".numbers").append('<a href="" class="number-page">' + numbers + "</a>");
         }
    } else {
        for (let i = 1; i <= numbers; i++) {
            $(".numbers").append('<a href="" class="number-page">' + i + "</a>");
        }
    }

    $(".number-page .number-page_active").removeClass("number-page_active");
    $('.number-page:contains("' + page + '")')
        .addClass("number-page_active");
}

var select = Cookies.get("select");
var arrowData = Cookies.get("arrow");
var arrowDirect = Cookies.get("arrow_direct");

if (!select) {
    select = 10;
    Cookies.set("select", 10);
}

$('.selection>option:contains("' + select + '")').prop("selected", true);
genNumbers(select);
SortPages(select, arrowData, arrowDirect);

// Selection records on site ready

// Selection records on change
$(".selection").on("change", function () {
    var select = Number($(".selection").val());

    $(".selection>option:selected").prop("selected", false);
    $('.selection>option:contains("' + select + '")').prop("selected", true);

    Cookies.set("page", 1);
    Cookies.set("select", select);

    document.location.reload();
});

$(".arrow").click(function () {
    arrow = $(this);
    arrowData = arrow.attr("data-title");
    arrowDirect = String(arrow.hasClass("arrow_bottom"));
    Cookies.set("page", 1);

    Cookies.set("arrow", arrow.attr("data-title"));
    Cookies.set("arrow_direct", arrowDirect);
});

$(".number-page").click(function () {
    $(".number-page").removeClass("number-page_active");
    $(this).addClass("number-page_active");

    Cookies.set("page", $(this).text());
});

$(".arrow-selector_right").click(function () {
    page = Number(Cookies.get("page"));
    select = Cookies.get("select");

    numbers = Math.ceil($(".list li").length / select);
    if (page < numbers) {
        Cookies.set("page", page + 1);
    }
});


$(".arrow-selector_left").click(function () {
    page = Number(Cookies.get("page"));
    select = Cookies.get("select");
    numbers = Math.ceil($(".list li").length / select);
    if (page > 1) {
        Cookies.set("page", page-1);
    }
});


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

$(".menu__item:last-child,.menu__elem_last").click(function(){
    $(".modal-wrapper_exit").css({ "display": "flex" });
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



     
$('.datepicker-here_first').click(function () {
    $('.datepicker-here_second').attr("disabled", true);
    $(".close").on("click", function () {
        if ($('.datepicker-here_first').val() != "Выбрать с -") {
            var myDatepicker = $(".datepicker-here_first").datepicker().data('datepicker');
            myDatepicker.hide();
             $('.datepicker-here_second').attr("disabled", false);
        }
    });
});


$('.datepicker-here_second').click(function () {
    $('.datepicker-here_first').attr("disabled", true);
    $(".close").on("click", function () {
        if ($('.datepicker-here_second').val() != "Выбрать по") {
            var myDatepicker = $(".datepicker-here_second").datepicker().data('datepicker');
            myDatepicker.hide();
            $('.datepicker-here_first').attr("disabled", false);
        }
    });
});


$('.choice_period').hide();
$(".btn_show").hide();
$(".btn_hide").hide();

$(".btn_hide").click(function () {
    $(".datepicker-here_first").html($(".datepicker-here_first").val("Выбрать с -"));
    $(".datepicker-here_second").html($(".datepicker-here_second").val("Выбрать по"));
    $(".btn_show").hide();
    $(".btn_hide").hide();
    $(".datepicker_border").show();
    $(".input_choice *").show();
    $(".choice_period").hide();
    $('.btn_show').attr("disabled", false);
    $('.btn_show').removeClass("disabled");
});

$(".btn_show").click(function () {
    $('.btn_show').attr("disabled", true);
    $('.btn_show').addClass("disabled");
});