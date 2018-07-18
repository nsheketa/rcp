$(document).ready(function () {

  function lineLength() {
    var line= $('.header__line');

    line.each(function() {
    $(this).css({
      width: parseInt($(this).parent().css('width')) - parseInt($(this).siblings('.header-nav__list-link').css('width'))  + 'px'
      })
    });
  }

  lineLength();
  $(window).resize(function () {
    lineLength();
  });

});