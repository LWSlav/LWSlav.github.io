$(document).ready(function() {
	$('.prise__item').click(function() {
		$('.prise__item').removeClass('strong');
		$(this).toggleClass('strong');

		var wind = $(this).attr('data-toggle');
		$('.wind').hide(300);
		$('.' + wind).show(300);
	});
})