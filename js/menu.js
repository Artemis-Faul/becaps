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