const shiftLeft = () => {
    // grab the last element and move it to the first place in the list for all slider-list elements
    $('.slider-list').each((i, slider) => {
        $(slider).children().last().prependTo($(slider))
    });
}

const shiftRight = () => {
    // grab the first element and move it to the last place in the list for all slider-list elements
    $('.slider-list').each((i, slider) => {
        $(slider).children().first().appendTo($(slider))
    });
}

const init = () => {
    // add event listeners for navigation buttons
    $('.push-right').click(shiftRight);
    $('.push-left').click(shiftLeft);
}

init()
