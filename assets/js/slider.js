


// Slider =======================================
$(".hero_slider").slick({
    dots: false,
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

$(".movie_slider").slick({
    dots: false,
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
});


// $(".project_box").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     dots: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     centerMode: true,
//     centerPadding: '15%',


//     infinite: true,
//     speed: 800,
//     fade: false,
//     adaptiveHeight: false,
//     lazyLoad: 'ondemand',

//     cssEase: 'linear',
//     swipeToSlide: true,
//     waitForAnimate: false,
//     draggable: true,

//     responsive: [
//         {
//             breakpoint: 1270,
//             settings: {
//                 centerPadding: '5%',
//                 arrows: false,
//             }
//         },
//         {
//             breakpoint: 900,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             }
//         },
//         {
//             breakpoint: 800,
//             settings: {
//                 centerPadding: '3.4%',
//             }
//         }
//     ]
// });