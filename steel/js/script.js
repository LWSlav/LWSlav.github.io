jQuery(document).ready(function($) {
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 1500,
		prevArrow: $('.but-next'),
		nextArrow: $('.but-prev'),
	});

	$('.block_button button, .sale_button button, .button-stock button' ).click(function() {
		$('.clous').fadeIn(500);
		$('.popup').css('left', '50%');
	});
	$('.clous, .popup span').click(function() {
        $('.clous').fadeOut(500);
		$('.popup').css('left', '-120%');
    });

});