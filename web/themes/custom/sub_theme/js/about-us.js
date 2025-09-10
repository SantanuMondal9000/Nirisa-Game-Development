(function (Drupal, once) {
  Drupal.behaviors.scrollAnimationViewsRows = {
    attach: function (context) {
      const rows = once('scroll-animation-views-rows', '.view-content-about-us .views-row', context);

      if (rows.length) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } 
            else {
              entry.target.classList.remove('show');
            }
          });
        }, { threshold: 0.2 }); // triggers when 20% visible

        rows.forEach(row => observer.observe(row));
      }
    }
  };
})(Drupal, once);
