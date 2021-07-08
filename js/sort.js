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

var months = {
    января: "01",
    февраля: "02",
    марта: "03",
    апреля: "04",
    мая: "05",
    июня: "06",
    июля: "07",
    августа: "08",
    сентября: "09",
    октября: "10",
    ноября: "11",
    декабря: "12",
};

function dateConverter(dateselect, datenormal, dateLimit) {
    if (dateLimit) {
        var datetime = dateselect.split(/[\s,:.]+/);
    } else {
        var datetime = $(dateselect)
            .text()
            .split(/[\s,:.]+/);
    }

    date_convert = [];
    date_convert[0] = datetime[2]; //год

    date_convert[1] = datetime[1];
    if (String(date_convert[1]).length > 2) {
        date_convert[1] = months[datetime[1]]; //месяц
    }

    date_convert[2] = datetime[0]; //день
    if (date_convert[2].length < 2) {
        date_convert[2] = "0" + datetime[0];
    }

    if (datenormal) {
        return Number.parseInt(date_convert.join(""));
    }

    date_convert[3] = datetime[4]; //время
    date_convert[4] = datetime[5];
    return Number.parseInt(date_convert.join(""));
}

function sortRecords(arrowData, arrowDirect) {
    $(".list li").sortElements(function (a, b) {
        var img = 0;
        var dateset = 0;
        if (arrowData == "Название") {
            (a = $(a).find(".list__item__col_name span")), (b = $(b).find(".list__item__col_name span"));
        } else if (arrowData == "Дата") {
            (a = $(a).find(".site__item__col_date span")), (b = $(b).find(".site__item__col_date span"));
            a = dateConverter(a);
            b = dateConverter(b);
            dateset = 1;
        } else if (arrowData == "Название-сайта") {
            (a = $(a).find(".list__item__col_name-sait span")), (b = $(b).find(".list__item__col_name-sait span"));
        } else if (arrowData == "Статус") {
            (a = $(a).find(".site__item__col_status span")), (b = $(b).find(".site__item__col_status span"));
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
            } else if (dateset) {
                return a < b ? 1 : -1;
            }
            return $(a).text() < $(b).text() ? 1 : -1;
        }
        $('[data-title="' + arrowData + '"]')
            .not(".arrow_bottom")
            .addClass("arrow_active");

        if (img) {
            return $(a).attr("alt") > $(b).attr("alt") ? 1 : -1;
        } else if (dateset) {
            return a > b ? 1 : -1;
        }

        return $(a).text() > $(b).text() ? 1 : -1;
    });
}

$(document).ready(function () {
    arrowData = Cookies.get("arrow");
    arrowDirect = Cookies.get("arrow_direct");

    sortRecords(arrowData, arrowDirect);
});
