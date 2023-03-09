$(document).ready(function() {
    
    $('.js--section-features').waypoint(function(direction) {
            if(direction == "down"){
                $('nav').addClass('sticky');
            } else{
                $('nav').removeClass('sticky');
            }
                                         
    }, {
        offset: '60px;'
    });
    
    /*---scoll on buttons---*/
    $('.js--scroll-to-about-me').click(function () {
        $('html, body').animate({scrollTop: $('.js--about-me').offset().top}, 1000);
    });
    
    $('.js--scroll-to-experience').click(function () {
        $('html, body').animate({scrollTop: $('.js--experience').offset().top}, 1000);
    });
    
    $('.js--scroll-to-projects').click(function () {
        $('html, body').animate({scrollTop: $('.js--projects').offset().top}, 1000);
    });
    
    $('.js--scroll-to-contacts').click(function () {
        $('html, body').animate({scrollTop: $('.js--contacts').offset().top}, 1000);
    });
    
    /*------mobile nav-----------*/
    
    
    /*---animations on scroll---*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});