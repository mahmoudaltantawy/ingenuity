$(document).ready(function(){
	
	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	

	 // Trigger Mixitup
	$('#Container').mixItUp();
	   
	
	 $(".shuffle li").click(function(){
		 $(this).addClass('selected').siblings().removeClass('selected');
		 });

	
	  $('.scrollspy').scrollSpy();

	  // navbar fixed

	  var headerHeight = $('nav').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > headerHeight) {
    $('nav').addClass('fixedNav');
  } else {
    $('nav').removeClass('fixedNav');
  }
});

// timer
 $('.hours').countTo({

 	from: 0,
    to: 3200,
    speed: 6000,
    refreshInterval: 50
 });
 $('.client').countTo({

 	from: 0,
    to: 120,
    speed: 6500,
    refreshInterval: 55
 });
 $('.project').countTo({

 	from: 0,
    to: 360,
    speed: 7000,
    refreshInterval: 60
 });
 $('.award').countTo({

 	from: 0,
    to: 42,
    speed: 6500,
    refreshInterval: 65
 });
  // scroll

   $("#scroll").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
             
});
	
});



 $(window).load(function(){
   
    $('.overlay_loading').fadeOut(5000);
});