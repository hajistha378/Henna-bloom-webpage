// =================================
// SELECT THEME BUTTON
// =================================

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navLinks");


// =================================
// CHECK SAVED THEME
// =================================

const savedTheme = localStorage.getItem("hennaTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.setAttribute("aria-label", "Switch to light mode");

} else {

    document.body.classList.remove("dark-mode");

    themeBtn.setAttribute("aria-label", "Switch to dark mode");

}


// =================================
// DARK MODE FUNCTION
// =================================

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");


    // CHECK CURRENT THEME

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("hennaTheme", "dark");

        themeBtn.setAttribute("aria-label", "Switch to light mode");

    } else {

        localStorage.setItem("hennaTheme", "light");

        themeBtn.setAttribute("aria-label", "Switch to dark mode");

    }

});


// =================================
// MOBILE MENU
// =================================

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function() {

        const isOpen = navMenu.classList.toggle("open");

        menuBtn.classList.toggle("active", isOpen);
        menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

    });

}


// =================================
// NAVIGATION CLICK EVENT
// =================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Welcome to Henna Bloom!");

        if (navMenu && menuBtn) {
            navMenu.classList.remove("open");
            menuBtn.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open menu");
        }

    });

});


// =================================
// WEBSITE WELCOME MESSAGE
// =================================

window.addEventListener("load", function() {

    console.log("Welcome to Henna Bloom 🌸");

});