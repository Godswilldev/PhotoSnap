let hamburger = document.querySelector(".hamburger");
let line1 = document.querySelector(".line");
let line2 = document.querySelector(".lin");
let navLinks = document.querySelector(".nav__links");
let rem = document.querySelector(".nav__logo1")

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    line2.classList.toggle("line2");
    line1.classList.toggle("line1");
    rem.classList.toggle("rem")

})