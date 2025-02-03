
  (function ($) {
  
  "use strict";

    // HERO SLIDE
    $('.hero-slide').backstretch([
      "images/slideshow/WhatsApp Image 2025-01-27 at 09.27.26_c5348b20.jpg",
      "images/slideshow/WhatsApp Image 2025-01-27 at 09.28.48_57aaa653.jpg", 
      "images/slideshow/WhatsApp Image 2025-01-27 at 09.27.28_8fdac049.jpg",
      "images/slideshow/WhatsApp Image 2025-01-27 at 09.28.51_58aba50a.jpg",
      "images/slideshow/WhatsApp Image 2025-01-27 at 09.27.24_c56e29c5.jpg"
      
    ],  {duration: 2000, fade: 750});

    // REVIEWS CAROUSEL
    $('.reviews-carousel').owlCarousel({
    items:3,
    loop:true,
    dots: false,
    nav: true,
    autoplay: true,
    margin:30,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    })

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
});
    
  })(window.jQuery);


