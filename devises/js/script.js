$(document).ready(function() {
	$('.prise__item').click(function() {
		$('.prise__item').removeClass('strong');
		$(this).toggleClass('strong');

		var wind = $(this).attr('data-toggle');
		$('.wind').hide(300);
		$('.' + wind).show(300);
	});

	$('#header').parallax({imageSrc: 'img/bg_first.jpg'});
	var header = new Headhesive('.nav');

	$("a[href^='#']").click(function(){
	        var _href = $(this).attr("href");
	        $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
	        return false;
	});

	
	
})