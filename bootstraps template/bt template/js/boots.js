$(function () {
    'use strict';
//adjust slider height
var winH   = $(window).height(),
    upperH = $('.upper-bar').innerHeight(),
    navH   = $('.navbar').innerHeight();
$('.slider, .carousel-item').height(winH - ( upperH + navH ));


// start featured work shuffle

    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md').css('opacity', 1);
        } else {
            $('.shuffle-imgs .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1)
        }
    });

    // let listUnstyled = document.querySelectorAll(".list-unstyled li");
    // let imgs = Array.from(document.querySelectorAll(".shuffle-imgs .col-md img"));
    // listUnstyled.forEach((li) => {
    //     li.addEventListener("click", removeActive);
    //     li.addEventListener("click", manageImgs);
    // });
    // function removeActive() {
    //     listUnstyled.forEach((li) => {
    //         li.classList.remove("active");
    //         this.classList.add("active");
    //     })
    // }
    // function manageImgs() {
    //     imgs.forEach((img) => {
    //         img.style.opacity = "0.08"
    //     });
    //     document.querySelectorAll(this.dataset.class).forEach((el) => {
    //         el.style.opacity = "1"
    //     })
    // }

// end featured work shuffle
})
window.onscroll = function () {
    if (this.scrollY >= 2000) {
        span.classList.add("show");}
    else {
        span.classList.remove("show");
        };
}
let span = document.querySelector(".up");
span.onclick= function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};