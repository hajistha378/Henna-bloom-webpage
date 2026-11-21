// =================================
// SELECT THEME BUTTON
// =================================

const themeBtn = document.getElementById("themeBtn");


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
// NAVIGATION CLICK EVENT
// =================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Welcome to Henna Bloom!");

    });

});


// =================================
// WEBSITE WELCOME MESSAGE
// =================================

window.addEventListener("load", function() {

    console.log("Welcome to Henna Bloom 🌸");

});