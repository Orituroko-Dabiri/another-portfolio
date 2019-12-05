$('.project-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery:{enabled:true}
    // other options
});

jQuery(function ($) {
    // Google Maps setup
    var googlemap = new google.maps.Map(
        document.getElementById('googlemap'),
        {
            center: new google.maps.LatLng(44.5403, -78.5463),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    );


//fixed nav 


let nav_offset_top = $('.header_area').height() + 50;

function navbarFixed(){
    if($('.header_area').length){
        $(window).scroll(function(){
            let scroll = $(window).scrollTop();
            if(scroll>= nav_offset_top) {
                $('.header_area.main-menu').addClass('.navbar-fixed');
            } else {
                $('.header_area .main-menu').removeClass('.navbar-fixed');
            }
        })
    }
}

navbarFixed();

});
