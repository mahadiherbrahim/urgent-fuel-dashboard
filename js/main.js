"use strict";

var $window = $(window);

function run() {
    var fName = arguments[0],
        aArgs = Array.prototype.slice.call(arguments, 1);
    try {
        fName.apply(window, aArgs);
    } catch (err) { }
}

/* chart
================================================== */
function _chart() {
    $(".b-skills").appear(function () {
        setTimeout(function () {
            $(".chart").easyPieChart({
                easing: "easeOutElastic",
                delay: 3000,
                barColor: "#369670",
                trackColor: "#D6D6D6",
                scaleColor: false,
                lineWidth: 11,
                trackWidth: 11,
                size: 200,
                lineCap: "round",
                onStep: function (from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                },
            });
        }, 150);
    });
}

$(document).ready(function () {
    run(_chart);
});