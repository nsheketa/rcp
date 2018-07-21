$(document).ready(function () {

  lineLength();
  iconsVisibility();
  $(window).resize(function () {
    lineLength();
  });
  $(window).scroll(function () {
    iconsVisibility();
  });

  //header nav lines
  function lineLength() {
    var line= $('.header-nav__line');

    line.each(function() {
    $(this).css({
      width: parseInt($(this).parent().css('width')) - parseInt($(this).siblings('.header-nav__list-link').css('width'))  + 'px'
      })
    });
  }

  //header line navigation
 $('.header__line').mouseover(function () {
   $('.header__line-icon').addClass('visible');
   $('.header-nav').addClass('fixed');
 });

  $('.header__line').mouseout(function () {
    $('.header__line-icon').removeClass('visible');
    $('.header-nav').removeClass('fixed');
  });

  $('.header__line-icon,.header__line-link').mouseover(function () {
    $('.header__line-link').addClass('visible');
  });

  $('.header__line-icon, .header__line-link').mouseout(function () {
    $('.header__line-link').removeClass('visible');
  });

  //fixed elements visibility

  function iconsVisibility() {
    var header = $('.header'),
        icons = $('.header__line-link'),
        headerTop = header.offset().top,
        headerHeight = parseInt(header.css('height')),
        headerBottom = headerTop + headerHeight,
        windowTop = $(window).scrollTop(),
        windowHeight = window.innerHeight,
        footer = $('.footer'),
        footerTop = footer.offset().top,
        headerLineR = $('.header__line-right'),
        headerLineRBottom = headerLineR.offset().top + parseInt(headerLineR.css('height')),
        headerLineL = $('.header__line-left'),
        headerLineLBottom = headerLineL.offset().top + parseInt(headerLineL.css('height'));

    // if (headerTop >= windowTop && headerBottom <= windowHeight){
    if (headerLineLBottom <= headerBottom) {
      $('.header__line-icon').addClass('visible');
      $('.header-nav').addClass('fixed');
    }
    else if (headerLineRBottom >= footerTop){
      $('.header__line-icon').addClass('visible');
      $('.header-nav').addClass('fixed');

    }
    else{
      $('.header__line-icon').removeClass('visible');
      $('.header-nav').removeClass('fixed');
    }
  }

  //menu

  $('.header__line-menu-link').click(function (e) {
    e.preventDefault();
    $('.menu').addClass('menu--open');
    $('body').addClass('no-scroll');
  });

  $('.menu__close').click(function () {
    $('.menu').removeClass('menu--open');
    $('body').removeClass('no-scroll');
  });

  $('.menu-list__link-design').click(function (e) {
    e.preventDefault();
    $('.menu-sublist').fadeToggle();
  });

  $('.mob-menu__btn').click(function () {
    $('.menu').addClass('menu--open')
    $('body').addClass('no-scroll');
  });



  // smooth scrolling
  $('.header__line-scroll-link').click(function () {

    var the_id = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(the_id).offset().top
    }, 'slow');

    return false;
  });


});