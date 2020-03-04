const menuItems = document.querySelectorAll(".accordion-menu__item");

menuItems.forEach((el, i) => {
    el.addEventListener("click", e => {

        el.classList.toggle("accordion-menu__item--active");

        menuItems.forEach((item, i) => {
            if (i !== i) {
                menuItems.classList.remove("accordion-menu__item--active");
            }
        });
    });
});

