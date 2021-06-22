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
        if (arrowData == "Название") {
            (a = $(a).find(".list__item__col_name span")), (b = $(b).find(".list__item__col_name span"));
            i++;
        } else if (arrowData == "ИНН") {
            (a = $(a).find(".list__item__col_inn span")), (b = $(b).find(".list__item__col_inn span"));
        } else if (arrowData == "Количество") {
            (a = $(a).find(".list__item__col_count-sait span")), (b = $(b).find(".list__item__col_count-sait span"));
        } else if (arrowData == "Клиенты") {
            (a = $(a).find(".list__item__col_client span")), (b = $(b).find(".list__item__col_client span"));
        } else if (arrowData == "Uptime") {
            (a = $(a).find(".list__item__col_uptime span")), (b = $(b).find(".list__item__col_uptime span"));
        }
        $(".arrow").removeClass("arrow_active");

        if (arrowDirect == "true") {
            $('[data-title="' + arrowData + '"]')
                .filter(".arrow_bottom")
                .addClass("arrow_active");
            return $(a).text() < $(b).text() ? 1 : -1;
        }
        $('[data-title="' + arrowData + '"]')
            .not(".arrow_bottom")
            .addClass("arrow_active");

        return $(a).text() > $(b).text() ? 1 : -1;
    });
}

$(document).ready(function () {
    arrowData = Cookies.get("arrow");
    arrowDirect = Cookies.get("arrow_direct");

    sortRecords(arrowData, arrowDirect);
});
