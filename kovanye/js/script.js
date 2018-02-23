$(document).ready(function() {
    $('.slider').bxSlider();
   	$("a").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);});
    $('.first').parallax({imageSrc: 'img/23.jpg'});
    $('.form-section').parallax({imageSrc: 'img/gates-of-heaven-clipart-18.jpg'});
    new WOW().init();
})  
