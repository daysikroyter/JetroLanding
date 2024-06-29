$(function () {
  $('.top__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/next-arrow.png" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.png" alt="arrow-prev"></button>',
  });

  $('.top__items').slick({
    asNavFor: '.top__slider',
    slidesToShow: 6,
    focusOnSelect: true,
  });
});