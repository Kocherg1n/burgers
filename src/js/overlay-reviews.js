let btn = document.querySelectorAll(".main-button--reviews");
let overlayElement = document.querySelector(".overlay");
let ovetlayContent = document.querySelector(".overlay__content");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", e => {
        overlayElement.style.display = "flex";
        overlayElement.querySelector(".overlay__text").innerHTML =
            e.target.previousElementSibling.innerHTML;
    });
}

overlayElement.querySelector(".overlay__close").onclick = () => {
    overlayElement.style.display = "none";
};
