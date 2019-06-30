$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
    });

    owl = $('.owl-carousel').owlCarousel();
    $(".prev").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".next").click(function () {
        owl.trigger('next.owl.carousel');
    });

    // menu adaptevi

    function adaptevi() {
        $('.menu__adaptive').click(function () {
            $('.menu').toggleClass('block')
            $('.header').toggleClass('height')
        })
    }
    adaptevi()

    $('.menu__link').click(function () {
        $('.menu').removeClass("block");
        $('.header').removeClass("height")
    })



    function scrollwindow() {
        $(window).resize(function () {
            let windowWidth = $(window).width();
            if (windowWidth > 781) {
                $('.menu').removeClass("block");
                $('.header').removeClass("height")
            }
        })
    }
    scrollwindow();

    // scroll link
    $('.menu__link').click(function () {
        var target = $(this).attr('href')
        $('html ,body').animate({
            scrollTop: $(target).offset().top
        }, 500)
    })

    // counter

    $('.counters__numbers').counterUp({
        delay: 10,
        time: 1000
    });

});