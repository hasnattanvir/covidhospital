$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: true,
        loop: true,
        speed: 800,
        effect: 'slide',

    });



    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});


// dector quoter slider

$(document).ready(function() {
    var swiper = new Swiper('.quoterslide', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        loop: true,
        speed: 700,
        effect: 'slide',
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });

});


// team member slider



$(document).ready(function() {
    var swiper = new Swiper('.teamslider', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        loop: true,
        speed: 700,
        effect: 'slide',
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });

});


$(document).ready(function() {
    $(".js-video-button").modalVideo({
        youtube: {
            controls: 0,
            nocookie: true
        }
    });

});