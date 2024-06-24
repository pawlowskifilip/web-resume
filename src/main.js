// pretty scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Opening menu

let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x-lg");
let menu = document.querySelector(".navbar__menu--mobile");

openBtn.addEventListener("click", ()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
    if (window.pageYOffset > 60) {
        navbar.classList.remove("scrolled");
    }
    document.body.classList.toggle("stop-scrolling");
});

closeBtn.addEventListener("click", ()=>{
    closeBtn.classList.toggle("hide");
    openBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
    if (window.pageYOffset > 60) {
        navbar.classList.add("scrolled");
    }
    document.body.classList.toggle("stop-scrolling");
});