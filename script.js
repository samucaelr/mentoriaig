$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });
});