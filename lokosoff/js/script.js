jQuery(document).ready(function() {

	$('.head__col button, .button').click(function() {
		$('.popup, .clous').fadeIn(300);
	});

	$('.clous, .popup span').click(function() {
		$('.popup, .clous').fadeOut(300);
	});
});