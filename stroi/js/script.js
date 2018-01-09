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

	$('#acc-1').click(function() {
		$('.amenities').css("background-image", "url('img/add-1.jpg')");
		$('.amenities__content h2').text("Ваш дом под ключ");
	});

	$('#acc-2').click(function() {
		$('.amenities').css("background-image", "url('img/add-2.jpg')");
		$('.amenities__content h2').text("Обустроем любой участок");
	});

	$('#acc-3').click(function() {
		$('.amenities').css("background-image", "url('img/rab.jpg')");
		$('.amenities__content h2').text("Ремонт и отделка");
	});

});
