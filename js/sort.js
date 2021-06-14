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




$('[data-title="Название"] .arrow').click(function () {
    $(".list li").sortElements(function (a, b) {
        (a = $(a).find(".list__item__col_name span")), (b = $(b).find(".list__item__col_name span"));
        return $(a).text() > $(b).text() ? 1 : -1;
    });
});

$('[data-title="Название"] .arrow_bottom').click(function () {
    $(".list li").sortElements(function (a, b) {
        (a = $(a).find(".list__item__col_name span")), (b = $(b).find(".list__item__col_name span"));
        return $(a).text() < $(b).text() ? 1 : -1;
    });
});




$('[data-title="ИНН"] .arrow').click(function () {
    $(".list li").sortElements(function (a, b) {
        (a = $(a).find(".list__item__col_inn span")), (b = $(b).find(".list__item__col_inn span"));
        return $(a).text() > $(b).text() ? 1 : -1;
    });
});

$('[data-title="ИНН"] .arrow_bottom').click(function () {
    $(".list li").sortElements(function (a, b) {
        (a = $(a).find(".list__item__col_inn span")), (b = $(b).find(".list__item__col_inn span"));
        return $(a).text() < $(b).text() ? 1 : -1;
    });
});




$('[data-title="Количество"] .arrow').click(function () {
    $(".list li").sortElements(function (a, b) {
        (a = $(a).find(".list__item__col_count-sait span")), (b = $(b).find(".list__item__col_count-sait span"));
        return $(a).text() > $(b).text() ? 1 : -1;
    });
});

$('[data-title="Количество"] .arrow_bottom').click(function () {
    $(".list li").sortElements(function (a, b) {
        (a = $(a).find(".list__item__col_count-sait span")), (b = $(b).find(".list__item__col_count-sait span"));
        return $(a).text() < $(b).text() ? 1 : -1;
    });
});
