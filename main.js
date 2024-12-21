const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close")

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}

const navLink = document.querySelectorAll(".nav__link")
function linkAction() {
    navMenu.classList.remove("show-menu")
}

navLink.forEach(link => link.addEventListener('click', linkAction))

//Swiper
let homeSwiper = new Swiper(".home-swiper",{
    spaceBetween: 30,
    loop: "true",
    pagination: {
        el: ".swiper_pagination",
        clickable: true,
    },
})

let newSWiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "true",
    spaceBetween: 16,
})

//Scroll up
function scrollUp() {
    const scrollup = document.getElementById("scroll-up")
    if(this.scrollY>=460) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

//Scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 350,
    reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`, {
    interval: 100
})
sr.reveal(`.about__data, .discount__img`, {
    origin: "left"
})
sr.reveal(`.about__img, .discont__data`, {
    origin: "right"
})

