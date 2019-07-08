$(document).ready(function() {

// Un-fix navbar when burger menu is open
  $('#hamburger').click(function() {
    if ( $('#navbar').hasClass('is-fixed-top') ) {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
      $('#navbar').removeClass('is-fixed-top');
    } else {
      $('#navbar').addClass('is-fixed-top');
    };    
  });

});
