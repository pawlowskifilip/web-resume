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
let openBtn = document.querySelector(".navbar__icons");
let menu = document.querySelector(".navbar__menu--mobile");
const menuItems = document.querySelectorAll(".navbar__menu--about, .navbar__menu--experience, .navbar__menu--projects, .navbar__menu--contact");

openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("open__mobile__menu");
    menu.classList.toggle("hidden");
    document.body.classList.toggle("stop-scrolling");

    if (document.body.classList.contains("stop-scrolling")) {
        navbar.classList.remove("scrolled");
    } else {
        if (window.pageYOffset > 60) {
            navbar.classList.add("scrolled");
        }
    }
});

// Hide menu when one option is triggered
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        openBtn.classList.remove("open__mobile__menu");
        menu.classList.add("hidden");
        document.body.classList.remove("stop-scrolling");

        if (window.pageYOffset > 60) {
            navbar.classList.add("scrolled");
        }
    });
});
