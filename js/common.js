
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

// Menu position change script
var menu_position;

function change_menu() {
    if (menu_position % 2 == 0) {
        $(".menu").css({ right: "0" });
        $(".menu").css({ left: "auto" });
        if (window.matchMedia("(min-width: 1025px)").matches) {
            $(".content").css({ "margin-left": "5.2083%" });
            $(".content_uptime").css({ "margin-right": "1.6666%", "margin-left": "5.2083%" });
        } else if (window.matchMedia("(min-width: 768px)").matches) {
            $(".content").css({ "margin-right": "0", "margin-left": "5.2083%" });
            // $(".content_uptime").css({ "margin-left": "11.4583%", "margin-right": "1.6666%" });
        } else {
            $(".content").css({ "margin-right": "0", "margin-left": "0" });
        }
        $(".menu__item_active").css({ "border-right": "5px solid red", "border-left": "0px" });
        $(".switch-menu svg").html(
            '<svg class="menu__item__icon" width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="36" height="25" rx="2" stroke="#919797" stroke-width="2"/><path d="M29 1L29 26" stroke="#919797" stroke-width="2"/></svg>'
        );
        Cookies.set("menu_position", "2");
    } else {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            $(".content").css({ "margin-right": "0", "margin-left": "11.4583%" });
            $(".content_uptime").css({ "margin-left": "11.4583%", "margin-right": "1.6666%" });
            if (window.matchMedia("(max-width: 1600px)").matches) {
                $(".content_uptime").css({ "margin-left": "8.4583%" });
            }
        }else if (window.matchMedia("(min-width: 768px)").matches) {
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

menu_position = Cookies.get("menu_position");
if (menu_position == null) {
    Cookies.set("menu_position", "1");
    menu_position = Cookies.get("menu_position");
}
Number.parseInt(menu_position);
change_menu();

$(".switch-menu").on("click", function () {
    menu_position++;
    change_menu();
}); // Menu position change script

// Selection records on site ready
$(document).ready(function () {
    $(".list li").hide();

    var per = $(".selection").val();
    per = Number.parseInt(per) + 1;
    for (var i = 0; i < per; i++) {
        $(".list li").eq(i).show();
    }
}); // Selection records on site ready

// Selection records on change
$(".selection").on("change", function () {
    $(".list li").hide();

    var per = $(".selection").val();
    for (var i = 0; i < per; i++) {
        $(".list li").eq(i).show();
    }
}); // Selection records

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
    console.log("hello");
    $(".block-warnings").appendTo(".content_uptime .content-top");
    $(".uptime-hint__icon").appendTo(".content_uptime .content__title");
    $(".sait-plight").css({ display: "none" });

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
        console.log(name_client, site_url);
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
                console.log(i);
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
                console.log(i);
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


