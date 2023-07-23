


// Slider =======================================
$(".hero_slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,


    infinite: true,
    speed: 800,
    fade: false,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,
});

$(".shop_slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 8000,
    pauseOnHover: false,


    infinite: true,
    speed: 800,
    fade: false,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,

    responsive: [
        {
            breakpoint: 1300,
            settings: {
                dots: false,
                arrows: false,
            }
        },
    ]
});

$(".movie_slider").slick({
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 8000,
    pauseOnHover: false,


    infinite: true,
    speed: 800,
    fade: false,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,

    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            }
        },

    ]
});

$(".post_slider").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 8000,
    pauseOnHover: false,


    infinite: true,
    speed: 800,
    fade: false,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,

    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
            }
        },

    ]
});
