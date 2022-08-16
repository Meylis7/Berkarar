
// var ==========================
let user = document.querySelector('.user');
let logout = document.querySelector('.log-out');

let burger = document.querySelector('.burger');
let search = document.querySelector('.search');
let menu = document.querySelector('.menu');
let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
let body = document.querySelector('body');


// let info_icon = document.querySelectorAll('.info_icon');
// let pop_info = document.querySelectorAll('.pop_info');



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

    // if (menu.classList.contains('active') && !e.target.closest('.burger')) {
    //     menu.classList.remove('active')
    // }


}


// Clicks ======================================================



if (burger != undefined) {
    burger.addEventListener('click', function () {
        sleep(2).then(() => {
            menu.classList.toggle('active');
            header.classList.add('active');
            nav.classList.add('active');
            body.classList.toggle('active');
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


// if (navs_list_link != undefined && !lang) {
//     navs_list_link.forEach(x => {
//         x.addEventListener('click', function () {
//             sleep(2).then(() => {
//                 navs.classList.remove('active');
//                 navs_list.classList.remove('active');
//             });
//         });
//     })
// }

// if (info_icon != undefined) {
//     info_icon.forEach(r => {
//         r.addEventListener('click', function () {
//             sleep(2).then(() => {
//                 pop_info.forEach(p => {
//                     p.classList.remove('active');
//                 })

//                 this.nextElementSibling.classList.toggle("active");
//             })
//         });
//     });
// }

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
            panel.style.maxHeight = "500px";
            panel.classList.add("active")
        }
    });
}

