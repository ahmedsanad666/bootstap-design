
$(function () {

    $(window).ready(function () {
        // $('.preloder').height(3000);
        $('.preloder').fadeOut(9000);
        $('.circle').fadeOut(9000);
        setTimeout(function () {
            $('page-preloader').hide();
        }, 2000);
    })

    // sllider 
    $('.carousel').carousel({
        interval: 2000
    });
    
    



});
