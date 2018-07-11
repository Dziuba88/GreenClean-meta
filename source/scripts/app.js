$( document ).ready(function() {
  $('.fp-slider .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    responsiveRefreshRate: 0,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 19"><path d="M37 11H5.5l6.7 6.6a1.6 1.6 0 0 1-.4 1 1.8 1.8 0 0 1-2.4 0L0 9.4l9.4-9a1.8 1.8 0 0 1 2.4 0 1.6 1.6 0 0 1 .4 1L5.5 8H37a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 19"><path d="M28.6 18.5a1.8 1.8 0 0 1-2.4 0 1.6 1.6 0 0 1-.4-1l6.7-6.5H1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h31.5l-6.7-6.6a1.6 1.6 0 0 1 .4-1 1.8 1.8 0 0 1 2.4 0L38 9.6z"/></svg>'
    ]
  });

  $('.fp-portfolio .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsiveRefreshRate: 0,
    responsive : {
      0: {
        items:1
      },
      769: {
        items:3
      },
      961: {
        items:4
      }
    },
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 35"><path d="M3 17.5l16.8 17a2.8 2.8 0 0 1-1.7.5 2.9 2.9 0 0 1-2-.9L0 17.5 16 .9a2.9 2.9 0 0 1 3.8-.4z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 35"><path d="M3.7 34.1a2.9 2.9 0 0 1-2 .9 2.8 2.8 0 0 1-1.7-.6l16.8-16.9L0 .5a2.8 2.8 0 0 1 3.7.4l16 16.6z"/></svg>'
    ]
  });

  $('.fp-testimonials .owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    nav:true,
    responsiveRefreshRate: 0,
    responsive : {
      0: {
        items:1
      },
      769: {
        items:1
      },
      961: {
        items:2
      }
    },
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 35"><path d="M3 17.5l16.8 17a2.8 2.8 0 0 1-1.7.5 2.9 2.9 0 0 1-2-.9L0 17.5 16 .9a2.9 2.9 0 0 1 3.8-.4z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 35"><path d="M3.7 34.1a2.9 2.9 0 0 1-2 .9 2.8 2.8 0 0 1-1.7-.6l16.8-16.9L0 .5a2.8 2.8 0 0 1 3.7.4l16 16.6z"/></svg>'
    ]
  });


  $('.navbar--show').click(function () {
    $(this).parents('.navbar').addClass('open')
    $('html').addClass('noscroll')
  });

  $('.navbar--menu__hide').click(function () {
    $(this).parents('.navbar').removeClass('open')
    $('html').removeClass('noscroll')
  });

  $('.footer--menu__toggle').click(function () {
    $(this).parent('.footer--menu').toggleClass('active')
  });
});

