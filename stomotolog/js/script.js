$(document).ready(function() {
$('#thanks__clouse').click(function() {
	 $('.thanks').hide(400);
     $('.clous-popup').hide(400);
});

$('.input-phon').mask("8(999) 999-9999");
$('.modal').click(function() {
	$('.clous-popup').show(400);
	$('.popup').show(400);
});
$('.clous-popup, .popup__X').click(function() {
	$('.clous-popup').hide(400);
	$('.popup').hide(400);
	$('.thanks').hide(400);
});


$(window).resize();
    var width = $(window).width();
    if (width <= 780) {
    	$('.footer-slider').bxSlider();
    	$('.bx-pager').removeClass('bx-pager-slider');
    	$('.footer-slider').createSimpleImgGallery();
    }
    else{
    	$('.bx-pager').toggleClass('bx-pager-slider');
    }


$('.comment').bxSlider();
$('.simple_img_gallery1').bxSlider();
$('.simple_img_gallery1').createSimpleImgGallery();
$('.simple_img_gallery2').createSimpleImgGallery();
})

