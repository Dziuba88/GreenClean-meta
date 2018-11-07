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

  $(document).on('click','.video--play',function(e) {
    e.preventDefault();
    var $this = $(this);
    var wrapper = $this.closest('.video');

    $('.video').removeClass('active');
    $('.video').find('.video--iframe').removeAttr('src');
    videoPlay(wrapper);
  });
  function videoPlay(wrapper) {
    var iframe = wrapper.find('.video--iframe');
    var src = iframe.data('src');
    wrapper.addClass('active');
    iframe.attr('src',src);
  };

  $('.popup--image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false,
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>'+item.el.attr('data-addr')+'</small>';
      }
    }
  });
  $('.popup--video, .portfolio--list__video, .video--list__item .thumbnail').magnificPopup({
    disableOn: 0,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true
  });

  $('.portfolio--list').magnificPopup({
    delegate: 'a', 
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>'+item.el.attr('data-addr')+'</small>';
      }
    }
  });

  $('[data-scroll]').on('click', function(event) {
    var target = $(this.getAttribute('data-scroll'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
});

  // google map //
  if ($('#g-map').length) {
    var map_styler = [
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ];
    var locations = [
      ["Marker Title", 53.3244431, -6.3857856, "img/marker.png"],
      ["Marker Title", 53.3344431, -6.3257856, "img/marker.png"],
      ["Marker Title", 53.3944431, -6.2557856, "img/marker.png"],
      ["Marker Title", 53.3144431, -6.2557856, "img/marker.png"],
      ["Marker Title", 53.3044431, -6.2057856, "img/marker.png"],
      ["Marker Title", 53.36044431, -6.2457856, "img/marker.png"],
    ];
    var map = new google.maps.Map(document.getElementById('g-map'), {
        zoom: 11,
        styles: map_styler,
        center: new google.maps.LatLng(53.3244431, -6.2557856),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: {
                url: locations[i][3],
                scaledSize: new google.maps.Size(72, 82)
            }
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    };
  }