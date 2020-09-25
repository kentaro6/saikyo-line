$(function () {
  $(".slick1").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    fade: false,
    dots: true,
    centerMode: true,
    centerPadding: "13%",
    variableWidth: true,
    slideToShow: 1,
    focusOnSelect: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
        },
      },
    ],
  });
});
