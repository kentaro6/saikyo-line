/**
 * slickのプラグインの設定
 */
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

//mobile-menu-icon のアニメーション
$(function () {
  $(".mobile-menu-icon").on("click", () => {
    $("body").toggleClass("menu-open");
  });
});
/**
 * modal-window の設定
 */
$(function () {
  $(".mobile-menu-icon").on("click", () => {
    $(".modal-window").slideToggle("slow");
  });
});
