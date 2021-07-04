$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        loop: true,
        speed: 700,
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


$(document).ready(function() {
    var swiper = new Swiper('.quoteslider', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        loop: true,
        speed: 700,
        effect: 'slide',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

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