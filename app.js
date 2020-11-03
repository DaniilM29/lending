





/*Mobile Menu*/
const buttons = document.querySelectorAll('.btn-mobile');
const nav = document.querySelector('.nav');
const formClose = document.querySelectorAll('.close');

buttons.forEach(button => button.addEventListener("click", function() {
    nav.classList.toggle('active');
}));

formClose.forEach(closeForm  => closeForm.addEventListener("click", function() {
    nav.classList.remove('active');
}));

/*Mobile Menu*/




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