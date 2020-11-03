$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: false,
    center: true,
    items: 3,
    loop: true,
    dots:true,
    autoplay: false,
    autoplayTimeout:4000,
    autoplayHoverPause: true,
    autoplaySpeed:2500,
    dotsSpeed: 1500,
     responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
         600:{
            items:2
        },
        769:{
            items:2
        },
         880:{
            items:3
        },
        992:{
            items:3
        },
        1000:{
            items:3
        }
    }
  });
});