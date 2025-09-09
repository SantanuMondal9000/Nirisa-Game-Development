// (function (Drupal, drupalSettings) {
//   Drupal.behaviors.bannerSwiper = {
//     attach: function (context, settings) {
//       if (drupalSettings.sub_theme && drupalSettings.sub_theme.swiperInit) {
//         once('bannerSwiperInit', '.swiper-container', context).forEach(function (element) {
//           new Swiper(element, {
//             loop: true,
//             autoplay: { delay: 5000 },
//             pagination: { el: '.swiper-pagination', clickable: true },
//             navigation: {
//               nextEl: '.swiper-button-next',
//               prevEl: '.swiper-button-prev',
//             },
//             touchStartPreventDefault: false, // Allow touch events
//             simulateTouch: true,             // Enable swiping
//             passiveListeners: false,         // Avoid scroll interference
//           });
//         });
//       }
//     }
//   };
// })(Drupal, drupalSettings);
(function (Drupal, drupalSettings) {
  Drupal.behaviors.bannerSwiper = {
    attach: function (context, settings) {
      once('bannerSwiperInit', '.swiper-container', context).forEach(function (element) {
        var swiper = new Swiper(element, {
          loop: true,
          autoplay: { delay: 4000 },
          pagination: { el: '.swiper-pagination', clickable: true },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });

        // Animate slide content on slide change
        swiper.on('slideChangeTransitionStart', function () {
          // remove animation from all slides
          element.querySelectorAll('.slide-content').forEach(function(el){
            el.classList.remove('slide-animate');
          });
          // add animation to active slide
          var active = element.querySelector('.swiper-slide-active .slide-content');
          if(active){
            active.classList.add('slide-animate');
          }
        });

        // Trigger animation for initial active slide
        var firstActive = element.querySelector('.swiper-slide-active .slide-content');
        if(firstActive) firstActive.classList.add('slide-animate');
      });
    }
  };
})(Drupal, drupalSettings);
