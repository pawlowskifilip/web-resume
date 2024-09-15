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

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    const messageDiv = document.getElementById('form-message');

    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            messageDiv.innerHTML = '<p style="color: var(--turquoise-blue-color);">Message sent successfully!</p>';
        } else {
            messageDiv.innerHTML = '<p style="color: red;">Oops! There was a problem submitting your form.</p>';
        }
    };
    xhr.send(data);
});
