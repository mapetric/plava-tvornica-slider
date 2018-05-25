'use strict';

var shiftLeft = function shiftLeft() {
    // grab the last element and move it to the first place in the list for all slider-list elements
    $('.slider-list').each(function (i, slider) {
        $(slider).children().last().prependTo($(slider));
    });
};

var shiftRight = function shiftRight() {
    // grab the first element and move it to the last place in the list for all slider-list elements
    $('.slider-list').each(function (i, slider) {
        $(slider).children().first().appendTo($(slider));
    });
};

var toggleOwerflow = function toggleOwerflow() {
    // toggle overflow for all the lists
    $('.slider-list').each(function (i, slider) {
        if ($(slider).css("overflow") === 'visible') {
            $(slider).css({ "overflow": "hidden" });
        } else {
            $(slider).css({ "overflow": "visible" });
        }
    });
};

var init = function init() {
    // add event listeners for navigation and overflow buttons
    $('.owerflow-button').click(toggleOwerflow);
    $('.push-right').click(shiftRight);
    $('.push-left').click(shiftLeft);
};

init();