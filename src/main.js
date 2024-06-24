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

openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("open__mobile__menu");
    menu.classList.toggle("hidden");
    document.body.classList.toggle("stop-scrolling");

    // Toggle 'scrolled' class based on menu state
    if (document.body.classList.contains("stop-scrolling")) {
        navbar.classList.remove("scrolled");
    } else {
        if (window.pageYOffset > 60) {
            navbar.classList.add("scrolled");
        }
    }
});
