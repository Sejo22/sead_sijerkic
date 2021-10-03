$(window).scroll(function(){
    if($(this).scrollTop() >=1) {
        $('.navbar').addClass('sticky-nav')
    }
    else{
        $('.navbar').removeClass('sticky-nav')
    }

});