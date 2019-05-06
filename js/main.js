$(document).ready(function () {
    var controller;
    lineLength();
    iconsVisibility();

    function loaderRemove() {
        var $body = $('body');

        $body.removeClass('is-loading');
        $('.homepage__loader').removeClass('is-visible');
    }
    $('.img__wrap img').imagesLoaded()
        .always( function( instance ) {
            console.log('all images loaded');
        })
        .done( function( instance ) {
            loaderRemove();
            console.log('all images successfully loaded');
        })

    //header nav lines
    function lineLength() {
        var line = $('.header-nav__line');

        line.each(function () {
            $(this).css({
                width: parseInt($(this).parent().css('width')) - parseInt($(this).siblings('.header-nav__list-link').css('width')) + 'px'
            })
        });
    }

    //homepage slider
    $('.header-bg__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        fade: true,
        arrows: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });


    //header line navigation
    $('.homepage__line').mouseover(function () {
        $('.homepage__line-icon').addClass('visible');
        $('.header-nav').addClass('fixed').removeClass('hidden');
    });

    $('.homepage__line').mouseout(function () {
        $('.homepage__line-icon').removeClass('visible');
        $('.header-nav').removeClass('hidden');
    });

    $('.homepage__line-icon,.homepage__line-link').mouseover(function () {
        $('.homepage__line-link').addClass('visible');
    });

    $('.homepage__line-icon, .homepage__line-link').mouseout(function () {
        $('.homepage__line-link').removeClass('visible');
    });

    //fixed elements visibility
    function iconsVisibility() {
        var header = $('.header'),
            headerTop = header.offset().top,
            headerHeight = header.height(),
            headerBottom = headerTop + headerHeight,
            windowTop = $(window).scrollTop(),
            viewportHeight = $(window).height(),
            docHeight = $(document).height(),
            wrap = $('.homepage-content__wrapper'),
            wrapTop = wrap.offset().top,
            wrapBottom = wrapTop + wrap.height(),
            hmLineR = $('.homepage__line-right'),
            hmLineRBottom = Math.round(hmLineR.offset().top + hmLineR.height()),
            hmLineL = $('.homepage__line-left'),
            hmLineLBottom = hmLineL.offset().top + hmLineL.height();

        if (hmLineLBottom <= headerBottom) {
            $('.homepage__line-icon').addClass('visible');
            $('.header-nav').addClass('fixed').removeClass('hidden');
        }
        else if ((hmLineRBottom >= wrapBottom)) {
            $('.homepage__line-icon').addClass('visible');
            $('.header-nav').addClass('fixed').removeClass('hidden');
        }
        else {
            $('.homepage__line-icon').removeClass('visible');
            $('.header-nav').removeClass('fixed').addClass('hidden');
        }
    }

    //menu
    $('.homepage__line-menu-link,.homepage__line-left-icon').click(function (e) {
        e.preventDefault();
        $('.menu').addClass('menu--open');
        $('body, html').addClass('no-scroll');
    });

    $('.menu__close').click(function () {
        $('.menu').removeClass('menu--open');
        $('body, html').removeClass('no-scroll');
    });

    $('.menu-list__link,.menu-sublist__link').click(function (e) {
        if ($(this).hasClass('menu-list__link-design')) {
            e.preventDefault();
            $('.menu-sublist').fadeToggle();
        } else {
            $('.menu').removeClass('menu--open');
            $('body').removeClass('no-scroll');
        }
    });

    $('.mob-menu__btn').click(function () {
        $('.menu').addClass('menu--open')
        $('body').addClass('no-scroll');
    });


    // smooth scrolling
    $('.homepage__line-scroll-link, .homepage__line-right-icon').click(function () {

        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 'slow');

        return false;
    });


    // scrollMagic
    controller = new ScrollMagic.Controller();
    $('.image__section-parallax').each(function () {
        var bg = $(this).find(".image__section-header");
        var parallax = TweenMax.from(bg, 1, {
            y: '-50%',
            ease: Linear.easeNone
        });

        var parallaxScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: '200%'
        })
            .setTween(parallax)
            .addTo(controller);
    });

    $('.images__section .row').each(function () {
        var $this = $(this);
        var trigger = $('.row');
        var el = $this.find('.img__wrap');
        var slide = TweenMax.staggerTo(el, 0.5, {y: 0, 'opacity': '1', scale: 1, ease: Linear.easeIn}, 0.3);

        var scrollScene01 = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.7,
            offset: 100,
            reverse: true
        })
            .setTween(slide)
            .addTo(controller);
    });

    $(window).resize(function () {
        lineLength();
    });
    $(window).scroll(function () {
        iconsVisibility();
    });

});

$(window).on('load', function () {
    $(".homepage__line").addClass("animated");
    $('body').removeClass('is-loading').addClass('is-loaded');
});
