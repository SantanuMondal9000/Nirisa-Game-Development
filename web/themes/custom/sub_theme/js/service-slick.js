(function ($, Drupal, once) {
  Drupal.behaviors.serviceSlick = {
    attach: function (context, settings) {
      $(once('serviceSlickInit', '.service-carousel', context)).each(function () {
        var $carousel = $(this).slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          infinite: true,
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
          ]
        });
        $('.service-prev', context).on('click', function () {
          console.log("jsahsdjad");
          $carousel.slick('slickPrev');
        });
        $('.service-next', context).on('click', function () {
          $carousel.slick('slickNext');
        });
      });
    }
  };
})(jQuery, Drupal, once);
