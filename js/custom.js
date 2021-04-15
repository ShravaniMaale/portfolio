/*====================================================
                        SERVICES
====================================================*/
$(function () {

    // animate on scroll
    new WOW().init();
});

document.addEventListener('DOMContentLoaded', function () {
    Typed.new('#typed', {
        stringsElement: document.getElementById('home-heading'),
        typeSpeed: 7
    });
});
/*============================
Animation for Skills section
=============================*/
$('.js-waypoint-1').waypoint(function (direction) {
    if (direction === 'down') {

        $('.js-waypoint-1').append('<link rel="stylesheet" href="./css/skills_animation.css" type="text/css" />');
    }

}, {
    offset: '70%'
});



/*============================
navigation
=============================*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass('portfolio-top-nav');
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass('portfolio-top-nav');
            $("#back-to-top").fadeIn();
        }
    });

});







/*============================
Smooth scrolling
=============================*/

$(document).ready(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href"); //get or return section id #about etc
        var value = (($(window).width() < 480) ? 50 : 64);
        $("html,body").animate({
            scrollTop: $(section).offset().top - value
        }, 1250, "easeInOutExpo");
    });


});
/*============================
owl-carousel
=============================*/
$(document).ready(function () {
    $("#my-projects").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: ($(".owl-carousel .item").length <= 1) ? true : false,
        autoplayHoverPause: true
    });

});
/*============================
social icons touchable
=============================*/
$(".social-icons li a").on("click touch", function () {
    var section = $(this).attr("href");
    $("a").click(section);
})
/*============================
Close mobile menu on click
=============================*/

$(window).on('resize', function (event) {

    if ($(window).width() <= 991) {
        $(".navbar-collapse ul li a").on("click touch", function () {

            $(".navbar-toggle").click();
        })


    }
    if (($(window).width() <= 991) && ($(window).width() >= 479)) {
        $("circle").attr("cx", 95).attr("cy", 95).attr("r", 85).attr("transform", "rotate(-90, 95, 95)");
    }



});

var $body = $('body'),
    $rows = $('#skills .row [class*=col-]'),
    $circle = $('circle'),
    $svg = $('svg'),
    atOrUnderBreakpoint = false;

function onResize(e) {

    var $width = $body.width();

    if ($width <= 480 && !atOrUnderBreakpoint) {

        $circle.attr({
            cx: 130,
            cy: 62,
            r: 55,
            transform: 'rotate( -84 100 99 )'
        });

        $svg.attr({
            width: 136

        })


        atOrUnderBreakpoint = true;


    }



}

$(window).on('resize', onResize);
onResize();
