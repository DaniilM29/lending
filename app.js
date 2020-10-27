/*Прокрутка до якоря*/
$(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 800;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});
/*Прокрутка до якоря*/


/*Уменьшение кнопок при клике*/
$('.js-button').mousedown(function() {
    $(this).addClass('button_scale ');
}).click(function() {
    return false;
}).mouseup(function() {
	$(this).removeClass('button_scale');
});
/*Уменьшение кнопок при клике*/



/*Модальное окно*/
const buttons = document.querySelectorAll('.form-btn');
const popupForm = document.querySelector('.popup-form');
const formClose = document.querySelectorAll('.close');

buttons.forEach(button => button.addEventListener("click", function() {
    popupForm.classList.add('form-active');
}));

formClose.forEach(closeForm  => closeForm.addEventListener("click", function() {
    popupForm.classList.remove('form-active');
}));
/*Модальное окно*/


/*Карусель*/
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	nav: true,
  	items: 3,
  	loop: true,
  	dots:true,
  	 responsive:{
        0:{
            items:1
        },
        552:{
            items:2
        },
        992:{
            items:3
        },
        1000:{
            items:3
        }
    }
  });
});


