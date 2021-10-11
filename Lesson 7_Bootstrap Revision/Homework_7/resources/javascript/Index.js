/*
$(window).scroll(function() {
    $('.fadedfx').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
            $(this).addClass("fadeIn");
        }
    });
});


var cardFade = document.getElementsByClassName("card");

cardFade.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});



var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var card = document.getElementsById("card");

window.addEventListener('scroll', function (event) {
	if (isInViewport(card)) {
        card.classList.add("fadeIn");
        card.classList.remove("fadeIn");
    }
});

*/
function checkElementLocation() {
    var $window = $(window);
    var bottom_of_window = $window.scrollTop() + $window.height();
  
    $('.elem').each(function(i) {
      var $that = $(this);
      var bottom_of_object = $that.position().top + $that.outerHeight();
  
      //if element is in viewport, add the animate class & remove hidden class
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('fadeIn');
        $(this).removeClass('to-fade-in');
      }
    });
  }
  // if in viewport, show the animation
  checkElementLocation();
  
  $(window).on('load', function() {
    checkElementLocation();
  });
  $(window).on('scroll', function() {
    checkElementLocation();
  });