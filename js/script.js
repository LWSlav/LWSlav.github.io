$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger').toggleClass('burger_active');
	});

	$('.burger').click(function() {
		$('.nav').toggleClass('nav-active');
	});

	$('li a').click(function() {
		$('.burger').removeClass('burger_active');
		$('.nav').removeClass('nav-active');
	});
})