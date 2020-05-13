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
    
    $('.js--scroll-to-projects').click(function () {
        $('html, body').animate({scrollTop: $('.js--projects').offset().top}, 1000);
    });
    
    $('.js--scroll-to-contacts').click(function () {
        $('html, body').animate({scrollTop: $('.js--contacts').offset().top}, 1000);
    });
    
    /*---animations on scroll---*/
    
});