// ================================
// Smooth Scroll for Navigation Links
// ================================

// Select only internal links that start with '#'
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// ================================
// Contact Form
// ================================

emailjs.init("c7Ckct5N59CrduckL");

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send(

        "service_9hvdpzr",

        "template_ek25w5h",

        {

            from_name: document.getElementById("name").value,

            from_email: document.getElementById("email").value,

            message: document.getElementById("message").value

        }

    )

    .then(function(){

        alert("Message sent successfully!");

        form.reset();

    })

    .catch(function(){

        alert("Something went wrong.");

    });

});

// ================================
// Typing Automation
// ================================

const words = [
    "Future Software Developer",
    "Power Platform Developer",
    "QA Automation Engineer",
    "Frontend Developer"
];

let wordIndex = 0;
let charIndex = 0;

function type() {

    if (charIndex < words[wordIndex].length) {

        document.getElementById("typing").textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    }

    else {

        setTimeout(erase, 2000);

    }

}

function erase() {

    if (charIndex > 0) {

        document.getElementById("typing").textContent =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);

    }

    else {

        wordIndex = (wordIndex + 1) % words.length;

        setTimeout(type, 500);

    }

}

type();

// ================================
// Dark mode
// ================================




const toggle = document.getElementById("theme-toggle");

const icon = toggle.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});
// ================================
// Responsive Mobile Navigation
// ================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        const menuIcon = menuToggle.querySelector("i");
        menuIcon.classList.toggle("fa-bars", !isOpen);
        menuIcon.classList.toggle("fa-xmark", isOpen);
    });

    // Close the mobile menu after selecting a section.
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

            const menuIcon = menuToggle.querySelector("i");
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        });
    });
}
