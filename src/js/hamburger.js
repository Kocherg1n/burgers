// menu-hamburger ===========================================

const burgerButton = document.querySelector(".hamburger");
const navigation = document.querySelector(".hamburger-nav__wrapper");
const close = document.querySelector(".hamburger__close");

burgerButton.addEventListener("click", function () {
    navigation.classList.toggle("active");
    document.body.classList.toggle("overflow");
});

close.addEventListener("click", function () {
    navigation.classList.toggle("active");
    document.body.classList.toggle("overflow");
});




