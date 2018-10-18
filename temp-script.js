  <script type="text/javascript">
jQuery(document).ready(function($) {
	if (window.pageYOffset === 0) {
  	var navbar = $('.c-navbar');
    navbar.css('transition-time', '0ms');
  	navbar.css('height', '126px');
    navbar.css('transition-time', '300ms');
  }
});
</script>

<script>
$(document).ready(function(){
  console.log('>>> page ready');

  $(".service-carousel").owlCarousel({
stagePadding: 0,
      margin: 30,
      dots: false,
      nav: true,
			navText: [
      // prev
      '<div class="btn-prev">' +
      '<svg class="utouch-icon icon-hover utouch-icon-arrow-left-1">' +
      '<use xlink:href="#utouch-icon-arrow-left-1"></use>' +
      '</svg>' +
      '<svg class="utouch-icon utouch-icon-arrow-left1">' +
      '<use xlink:href="#utouch-icon-arrow-left1"></use>' +
      '</svg>' +
      '</div>',
      // next
      '<div class="btn-next">' +
      '<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">' +
      '<use xlink:href="#utouch-icon-arrow-right-1"></use>' +
      '</svg>' +
      '<svg class="utouch-icon utouch-icon-arrow-right1">' +
      '<use xlink:href="#utouch-icon-arrow-right1"></use>' +
      '</svg>' +
      '</div>'
      ],
      loop: false,
      responsiveClass:true,
      smartSpeed: 300,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0
        },
        768: {
          items: 3,
          margin: 20,
          stagePadding: 0
        },
        991: {
          items: 3,
          margin: 30,
          stagePadding: 0
        },
        1200: {
          items: 5,
          margin: 30,
          stagePadding: 0
        },
        1600: {
          items: 5,
          margin: 30,
          stagePadding: 0
        }
      }
	});

	$(".infinity-logos").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    items: 5,
    autoplayHoverPause:false,
    autoplayTimeout:5000,
    autoplaySpeed: 5000,
    autoWidth:true,
    slideTransition: 'linear',
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
	}).trigger("play.owl.autoplay");
  
  	$(".infinity-city").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    items: 5,
    autoplayHoverPause:false,
    autoWidth:true,
    slideTransition: 'linear',
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    responsive: {
        0: {
              autoplayTimeout:17000,
    					autoplaySpeed: 17000,
        },
        768: {
              autoplayTimeout:15000,
    					autoplaySpeed: 15000,
        },
    }
	}).trigger("play.owl.autoplay");
});
</script>