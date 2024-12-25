(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 3, // 3 slides on desktop
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768, // Below 768px (Mobile)
          settings: {
            slidesToShow: 1, // Show 1 slide
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992, // Below 992px (Tablet)
          settings: {
   
              slidesToShow: 2, // Show 2 slides
            slidesToScroll: 1,
          }
        }
      ]
    });
  });
  
    
})(jQuery);


$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 3, // 3 slides on desktop
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768, // Below 768px (Mobile)
          settings: {
            slidesToShow: 1, // Show 1 slide
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992, // Below 992px (Tablet)
          settings: {
   
              slidesToShow: 2, // Show 2 slides
            slidesToScroll: 1,
          }
        }
      ]
    });
  });
  
