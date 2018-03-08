function formClick(form) {
	$(form.name).css('border', '1px solid #5C5C5C');
	$(form.tel).css('border', '1px solid #5C5C5C');
	var name = form.name.value;
	var phone = form.tel.value;
	
	if (name.length < 2) {
		$(form.name).css('border', '2px solid #E57474');
		return false
	}
	else if (phone.length < 6) {
		$(form.tel).css('border', '2px solid #E57474');
		return false
	}
	else{
		document.getElementById('form').reset();
		document.getElementById('form-popup').reset();
	}
};

jQuery(document).ready(function() {
	 $('.project-slide, .portfolio-slide-foto').slick({
	 	autoplay: false,
	 	autoplaySpeed: 1000,
	 	speed: 1500,
	 	arrows: true,
	 	nextArrow: $('.arrow-slide-next'), 
	 	prevArrow: $('.arrow-slide-prev'), 
	 });

	 $('.clous, .X-clous').click(function() {
	 	$('.clous').hide(500);
	 	$('.popup').css('top', '-1000px');
	 });

	 $('.button-1, .Zakaz').click(function() {
	 	$('.clous').show(500);
	 	$('.popup').css('top', '50px');
	 });

	 $('.navfixed').click(function() {
	 	$('.navfixed span').toggleClass('navActive');
	 	$('nav').toggleClass('nav-manuActive');
	 });

	 $('.accord-li li').click(function() {
	 	$('.accord-li li').removeClass('activeAccord');
	 	$(this).toggleClass('activeAccord');
	 });

	 
});