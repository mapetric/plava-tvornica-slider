'use strict';

const images = [
    "./assets/slider-image-1.jpg",
    "./assets/slider-image-2.jpg",
    "./assets/slider-image-3.jpg",
    "./assets/slider-image-4.jpg",
    "./assets/slider-image-5.jpg",
    "./assets/slider-image-6.jpg",
    "./assets/slider-image-7.jpg",
    "./assets/slider-image-8.jpg",
    "./assets/slider-image-9.jpg",
]

const shiftLeft = () => {
    // grab the last element and move it to the first place in the list for all slider-list elements
    const image = $('.push-left').children().first();
    image.attr("src", "./assets/arrow-gray-left.png")
    setTimeout(() => {
        image.attr("src", "./assets/arrow-blue-left.png")
    }, 200)
    $('.slider-list').each((i, slider) => {
        $(slider).children().last().prependTo($(slider))
    });
}

const shiftRight = () => {
    // grab the first element and move it to the last place in the list for all slider-list elements
    const image = $('.push-right').children().first();
    image.attr("src", "./assets/arrow-gray-right.png")
    setTimeout(() => {
        image.attr("src", "./assets/arrow-blue-right.png")
    }, 200)
    $('.slider-list').each((i, slider) => {
        $(slider).children().first().appendTo($(slider))
    });
}

const toggleOwerflow = () => {
    // toggle overflow for all the lists
    $('.slider-list').each((i, slider) => {
        if ($(slider).css("overflow") === 'visible') {
            $(slider).css({"overflow" : "hidden"});
        } else {
            $(slider).css({"overflow" : "visible"});
        }
    });
}

const createImage = (src) => {
    // returns a string with HTML structure for an image inside a li item
    return `<li><img src="${src}" alt=""></li>`;
}

const assignImages = () => {
    // rounds up the number of half the images inside images array and assigns them accordingly
    let half = Math.ceil(images.length / 2);
    for (let i = 0; i < images.length; i++) {
        if (i <= half) {
            $('.slider-list').first().append(createImage(images[i]));
        } else {
            $('.slider-list').last().append(createImage(images[i]));
        }
    }
}

const init = () => {
    // add event listeners for navigation and overflow buttons and assign images to sliders
    assignImages();
    $('.overflow-button').click(toggleOwerflow);
    $('.push-right').click(shiftRight)

    $('.push-left').click(shiftLeft);
}

init()
