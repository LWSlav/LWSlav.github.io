$(document).ready(function() {

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
        return false;
	});

 	new WOW().init();

 	$('.burger').click(function() {
		$('.burger').toggleClass('burger_active');
		$('.nav_active').toggleClass('nav_active-block');
	});

	//$('li a').click(function() {
	//	$('.burger').removeClass('burger_active');
		//$('.nav').removeClass('nav-active');
	//});

});