// themes/custom/your_subtheme/js/error-pages.js
(function (Drupal) {
  Drupal.behaviors.errorPage = {
    attach: function (context) {
      var svg = context.querySelectorAll ? context.querySelectorAll('.error-illustration') : [];
      svg.forEach && svg.forEach(function (el) {
        el.addEventListener('mouseenter', function () {
          el.style.transform = 'translateY(-6px)';
          el.style.boxShadow = '0 30px 70px rgba(16,24,40,0.16)';
        });
        el.addEventListener('mouseleave', function () {
          el.style.transform = '';
          el.style.boxShadow = '';
        });
      });
    }
  };
})(Drupal);
