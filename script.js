console.log("script.js is working");

/* =========================================================
   PART 1: MOBILE HAMBURGER MENU
   ========================================================= */

// Find the ☰ button and the list of links in the HTML
const menuToggle = document.getElementById("menu-toggle"); // <button id="menu-toggle">
const navLinks = document.querySelector(".nav-links");     // <ul class="nav-links">

// Only run if both exist (stops a crash if one is missing)
if (menuToggle && navLinks) {

    // When ☰ is tapped, open or close the menu
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("open");    // CSS shows/hides the dropdown
        menuToggle.classList.toggle("open");  // CSS turns ☰ into X
        menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
    });

    // When a link is tapped, close the menu so it doesn't cover the page
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", false);
        });
    });

} else {
    console.log("Hamburger problem: menu-toggle button or .nav-links is missing in the HTML");
}


/* =========================================================
   PART 2: CV OPEN / CLOSE
   ========================================================= */

const cvToggle = document.getElementById("cv-toggle");   // the heading button
const cvContent = document.getElementById("cv-content"); // the hidden cards

if (cvToggle && cvContent) {

    // Click the heading to open/close the CV cards
    cvToggle.addEventListener("click", function () {
        cvContent.classList.toggle("open");
        cvToggle.classList.toggle("open");   // flips the arrow
        cvToggle.setAttribute("aria-expanded", cvContent.classList.contains("open"));
    });

    // Navbar "CV" link and "View CV" button always open the CV
    document.querySelectorAll('a[href="#cv"]').forEach(function (link) {
        link.addEventListener("click", function () {
            cvContent.classList.add("open");
            cvToggle.classList.add("open");
            cvToggle.setAttribute("aria-expanded", true);
        });
    });

} else {
    console.log("CV problem: cv-toggle or cv-content is missing in the HTML");
}


/* =========================================================
   PART 3: GALLERY LIGHTBOX (click a photo to enlarge)
   ========================================================= */

const lightbox = document.getElementById("lightbox");            // dark screen
const lightboxImg = document.getElementById("lightbox-img");     // big picture
const lightboxClose = document.getElementById("lightbox-close"); // the X button
const galleryImages = document.querySelectorAll(".gallery-photo img");

if (lightbox && lightboxImg && lightboxClose) {

    // Clicking a photo copies it into the lightbox and shows it
    galleryImages.forEach(function (img) {
        img.addEventListener("click", function () {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add("open");
        });
    });

    // Function that hides the lightbox
    function closeLightbox() {
        lightbox.classList.remove("open");
    }

    // Close with the X
    lightboxClose.addEventListener("click", closeLightbox);

    // Close when the dark area (not the picture) is clicked
    lightbox.addEventListener("click", function (event) {
        if (event.target !== lightboxImg) {
            closeLightbox();
        }
    });

    // Close with the Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });

} else {
    console.log("Lightbox problem: the lightbox div is missing in the HTML");
}