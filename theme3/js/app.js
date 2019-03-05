$(document).ready(function() {

  // On scroll 
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 5) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');

    }
  });

  // icon-bar



});

function myFunction(x) {
  x.classList.toggle("change");
}