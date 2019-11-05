(function($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

//new hover effect
$('.dh-container').directionalHover();
$('.dh-container').directionalHover({
  overlay: "dh-overlay",
  easing: "swing",
  speed: 400
});

// for favorite section
$(".heart.fa").click(function() {
  $(this).toggleClass("fa-heart fa-heart-o");
});


$(window).scroll(function(e){
  var $el = $('.stickySearch');
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 200 && !isPositionFixed){
    // $el.css({'position': 'fixed', 'top': '0px'});
    $el.addClass('stickySearch--sticky')
  }
  if ($(this).scrollTop() < 200 && isPositionFixed){
    // $el.css({'position': 'static', 'top': '0px'});
    $el.removeClass('stickySearch--sticky')
  }
});

$(document).ready(function() {
  $('select').select2();
});
