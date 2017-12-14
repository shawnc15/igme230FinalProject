$(function () {
    $(".shape").draggable({ containment: "#canvas" });
});

var newsquare;
var newcircle;
var newrect;
var newtriangle;

function createShape() {
    var shapeMenu = document.getElementById("shape");
    var shape = shapeMenu.options[shapeMenu.selectedIndex].value;
    var colorMenu = document.getElementById("color");
    var color = colorMenu.options[colorMenu.selectedIndex].value;
    var w = document.getElementById("width").value;
    var h = document.getElementById("height").value;
    var div = document.createElement("div");
    var opacityMenu = document.getElementById("opacity");
    var op = opacityMenu.options[opacityMenu.selectedIndex].value;
    div.className = "shape " + shape + " newshape";
    if (shape == "triangle") {
        div.style.borderBottom = "100px solid " + color;
    }
    else {
        div.style.backgroundColor = color;
    }
    div.style.width = w + "px";
    div.style.height = h + "px";
    div.style.opacity = op;
    document.getElementById("canvas").appendChild(div);
    $(function () {
        $(".shape").draggable({ containment: "#canvas" });
    });
    if (shape == "square") {
        div.className = "shape " + shape + " newsquare";
        newsquare = anime({
            targets: '.newsquare',
            rotate: {
                value: '1turn',
                easing: 'easeInOutSine'
            },
            scaleY: [
                { value: 0.5, duration: 500, easing: 'easeInOutQuad' },
                { value: 1, duration: 500, easing: 'easeInOutQuad' }
            ],
            scaleX: [
                { value: 0.5, duration: 500, easing: 'easeInOutQuad' },
                { value: 1, duration: 500, easing: 'easeInOutQuad' }
            ],
            autoplay: false,
            loop: true
        });
    }
    else if (shape == "circle") {
        div.className = "shape " + shape + " newcircle";
        newcircle = anime({
            targets: '.newcircle',
            translateY: [
                { value: 200, duration: 500 },
                { value: 400, duration: 500 },
                { value: 200, duration: 500 },
                { value: 0, duration: 500 }
            ],
            translateX: [
                { value: 200, duration: 500 },
                { value: 0, duration: 500 },
                { value: -200, duration: 500 },
                { value: 0, duration: 500 }
            ],
            autoplay: false,
            loop: true
        });
    }
    else if (shape == "rectangle") {
        div.className = "shape " + shape + " newrect";
        newrect = anime({
            targets: '.newrect',
            translateY: [
                { value: 300, duration: 1000 },
                { value: 0, duration: 800 }
            ],
            scaleY: [
                { value: 2, duration: 100, easing: 'easeOutExpo' },
                { value: 1, duration: 900, elasticity: 300 },
                { value: 2, duration: 100, easing: 'easeOutExpo' },
                { value: 1, duration: 900, elasticity: 300 }
            ],
            scaleX: [
                { value: 0.5, duration: 100, easing: 'easeOutExpo' },
                { value: 1, duration: 900, elasticity: 300 },
                { value: 0.5, duration: 100, easing: 'easeOutExpo' },
                { value: 1, duration: 900, elasticity: 300 }
            ],
            autoplay: false,
            loop: true
        });
    }
    else if (shape == "triangle") {
        div.className = "shape " + shape + " newtriangle";
        newtriangle = anime({
            targets: '.newtriangle',
            rotate: [
                { value: '.25turn', duration: 300, easing: 'easeInOutSine' },
                { value: '.25turn', duration: 300, easing: 'easeInOutSine' },
                { value: '.5turn', duration: 500, easing: 'easeInOutSine' },
                { value: '.5turn', duration: 500, easing: 'easeInOutSine' },
                { value: '.75turn', duration: 700, easing: 'easeInOutSine' },
                { value: '.75turn', duration: 700, easing: 'easeInOutSine' },
                { value: '1turn', duration: 900, easing: 'easeInOutSine' },
                { value: '1turn', duration: 900, easing: 'easeInOutSine' }
            ],
            autoplay: false,
            loop: true
        });
    }
}

function applySettings()
{
    var speedMenu = document.getElementById("speed");
    var sp = speedMenu.options[speedMenu.selectedIndex].value;
    anime.speed = sp;
}

var square = anime({
    targets: '.square',
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    scaleY: [
        { value: 0.5, duration: 500, easing: 'easeInOutQuad' },
        { value: 1, duration: 500, easing: 'easeInOutQuad' }
    ],
    scaleX: [
        { value: 0.5, duration: 500, easing: 'easeInOutQuad' },
        { value: 1, duration: 500, easing: 'easeInOutQuad' }
    ],
    autoplay: false,
    loop: true
});

var circle = anime({
    targets: '.circle',
    translateY: [
        { value: 200, duration: 500 },
        { value: 400, duration: 500 },
        { value: 200, duration: 500 },
        { value: 0, duration: 500 }
    ],
    translateX: [
        { value: 200, duration: 500 },
        { value: 0, duration: 500 },
        { value: -200, duration: 500 },
        { value: 0, duration: 500 }
    ],
    autoplay: false,
    loop: true
});

var rect = anime({
    targets: '.rectangle',
    translateY: [
        { value: 300, duration: 1000 },
        { value: 0, duration: 800 }
    ],
    scaleY: [
        { value: 2, duration: 100, easing: 'easeOutExpo' },
        { value: 1, duration: 900, elasticity: 300 },
        { value: 2, duration: 100, easing: 'easeOutExpo' },
        { value: 1, duration: 900, elasticity: 300 }
    ],
    scaleX: [
        { value: 0.5, duration: 100, easing: 'easeOutExpo' },
        { value: 1, duration: 900, elasticity: 300 },
        { value: 0.5, duration: 100, easing: 'easeOutExpo' },
        { value: 1, duration: 900, elasticity: 300 }
    ],
    autoplay: false,
    loop: true
});

var triangle = anime({
    targets: '.triangle',
    rotate: [
        { value: '.25turn', duration: 300, easing: 'easeInOutSine' },
        { value: '.25turn', duration: 300, easing: 'easeInOutSine' },
        { value: '.5turn', duration: 500, easing: 'easeInOutSine' },
        { value: '.5turn', duration: 500, easing: 'easeInOutSine' },
        { value: '.75turn', duration: 700, easing: 'easeInOutSine' },
        { value: '.75turn', duration: 700, easing: 'easeInOutSine' },
        { value: '1turn', duration: 900, easing: 'easeInOutSine' },
        { value: '1turn', duration: 900, easing: 'easeInOutSine' }
    ],
    autoplay: false,
    loop: true
});

function PlayAnim() {
    square.play();
    circle.play();
    rect.play();
    triangle.play();
    if (newsquare != null) {
        newsquare.play();
    }
    if (newcircle != null) {
        newcircle.play();
    }
    if (newrect != null) {
        newrect.play();
    }
    if (newtriangle != null) {
        newtriangle.play();
    }

}

function PauseAnim() {
    square.pause();
    circle.pause();
    rect.pause();
    triangle.pause();
    if (newsquare != null) {
        newsquare.pause();
    }
    if (newcircle != null) {
        newcircle.pause();
    }
    if (newrect != null) {
        newrect.pause();
    }
    if (newtriangle != null) {
        newtriangle.pause();
    }
}

function ReverseAnim() {
    square.reverse();
    circle.reverse();
    rect.reverse();
    triangle.reverse();
    if (newsquare != null) {
        newsquare.reverse();
    }
    if (newcircle != null) {
        newcircle.reverse();
    }
    if (newrect != null) {
        newrect.reverse();
    }
    if (newtriangle != null) {
        newtriangle.reverse();
    }
}