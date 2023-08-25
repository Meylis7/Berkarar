
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

let logout = document.querySelector('.logout');
let logout_link = document.querySelectorAll('.logout a');

let movie_link = document.querySelectorAll('.movie_item-link');
let movie_poster = document.querySelector('.movie_all h6');

let modal_close = document.querySelectorAll('.modal_close');





function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


window.onscroll = function () {
    scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 200) {
        document.querySelector('.header').classList.add('fixed');
        document.querySelector('.nav').classList.add('fixed');
    } else {
        document.querySelector('.header').classList.remove('fixed');
        document.querySelector('.nav').classList.remove('fixed');
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

    if (user_group != undefined) {
        if (user_group.classList.contains('active') && !e.target.closest('.user_title')) {
            user_group.classList.remove('active')
        }
    }

}


// Clicks ======================================================



if (burger != undefined) {
    burger.addEventListener('click', function () {
        sleep(2).then(() => {
            menu.classList.toggle('active');
            header.classList.toggle('active');
            nav.classList.toggle('active');
            body.classList.toggle('active');
            burger.classList.toggle('active');
        })
    });
}

if (logout != undefined) {
    logout.addEventListener('click', function () {
        sleep(2).then(() => {
            logout.classList.toggle('active');

            logout_link.forEach(p => {
                p.classList.toggle('active');
            })
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

if (movie_link != undefined) {
    movie_link.forEach(x => {
        x.addEventListener('click', function () {
            sleep(2).then(() => {
                body.classList.add('active');
            });
        });
    })
}

if (movie_poster != undefined) {
    movie_poster.addEventListener('click', function () {
        sleep(2).then(() => {
            body.classList.add('active');
        })
    });
}

if (modal_close != undefined) {
    modal_close.forEach(x => {
        x.addEventListener('click', function () {
            sleep(2).then(() => {
                body.classList.remove('active');
            });
        });
    })
}



// Accordion =============================

let accordion = document.getElementsByClassName("accord");
// let i;
// let e;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.remove("active")
        } else {
            panel.style.maxHeight = "100000px";
            panel.classList.add("active")
        }
    });
}

// Accordion end =========================