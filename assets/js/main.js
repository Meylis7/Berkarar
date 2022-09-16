
// var ==========================

let burger = document.querySelector('.burger');
let search = document.querySelector('.search');
let more = document.querySelector('.more');
let menu = document.querySelector('.menu');
let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
let body = document.querySelector('body');

let user_title = document.querySelector('.user_title');
let user_group = document.querySelector('.user_group');

let lang_current = document.querySelector('.lang_current');
let lang_box = document.querySelector('.lang_box');
let mobile_link = document.querySelectorAll('.mobile_buttons-link');

// let movie_link = document.querySelectorAll('.movie_item-link');





function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


window.onscroll = function () {
    scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 500) {
        document.querySelector('.header').classList.add('active');
        document.querySelector('.nav').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
        document.querySelector('.nav').classList.remove('active');
    }
};

window.onclick = function (e) {

    // drop_lang.forEach(drop_lang => {
    //     if (drop_lang != undefined) {
    //         drop_lang.classList.contains('active') && !e.target.closest('.nav_inner');
    //         drop_lang.classList.remove('active')
    //     }
    // }
    // );

    if (lang_box.classList.contains('active') && !e.target.closest('.lang_current')) {
        lang_box.classList.remove('active')
    }

    if (user_group.classList.contains('active') && !e.target.closest('.user_title')) {
        user_group.classList.remove('active')
    }

}


// Clicks ======================================================



if (burger != undefined) {
    burger.addEventListener('click', function () {
        sleep(2).then(() => {
            menu.classList.toggle('active');
            header.classList.add('active');
            nav.classList.add('active');
            body.classList.toggle('active');
            burger.classList.toggle('active');
        })
    });
}

if (search != undefined) {
    search.addEventListener('click', function () {
        sleep(2).then(() => {
            menu.classList.toggle('active');
            header.classList.add('active');
            nav.classList.add('active');
            body.classList.toggle('active');
        })
    });
}

if (more != undefined) {
    more.addEventListener('click', function () {
        sleep(2).then(() => {
            menu.classList.toggle('active');
            header.classList.add('active');
            nav.classList.add('active');
            body.classList.toggle('active');
        })
    });
}

if (mobile_link != undefined) {
    mobile_link.forEach(x => {
        x.addEventListener('click', function () {
            sleep(2).then(() => {
                menu.classList.remove('active');
                header.classList.remove('active');
                nav.classList.remove('active');
                body.classList.remove('active');
            });
        });
    })
}

if (lang_current != undefined) {
    lang_current.addEventListener('click', function () {
        sleep(2).then(() => {
            lang_box.classList.toggle('active');
        })
    });
}

if (user_title != undefined) {
    user_title.addEventListener('click', function () {
        sleep(2).then(() => {
            user_group.classList.toggle('active');
        })
    });
}

// if (movie_link != undefined) {
//     movie_link.forEach(x => {
//         x.addEventListener('click', function () {
//             sleep(2).then(() => {
//                 console.log("klkl")
//                 body.classList.add('active');
//             });
//         });
//     })
// }



