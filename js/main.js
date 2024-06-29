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
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true
        }
      },
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });
});