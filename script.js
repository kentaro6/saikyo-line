<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="js/slick.min.js"></script>
<script>

  $(function () {
    $('.slick1').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      fade: false,
      dots: true,
      centerMode: true,
      centerPadding: '13%',
      variableWidth: true,
      slideToShow: 1,
      focusOnSelect: true,
      speed: 1000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: false
          }
        }
      ]
    });
  });


</script>