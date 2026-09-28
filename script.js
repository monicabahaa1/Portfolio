/* ================= MOBILE NAVIGATION ================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");


    const icon =
        menuToggle.querySelector("i");


    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* ================= CLOSE MOBILE NAV ================= */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");


            const icon =
                menuToggle.querySelector("i");


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });



/* ================= THEME TOGGLE ================= */

const themeToggle =
    document.querySelector(".theme-toggle");

const themeIcon =
    themeToggle.querySelector("i");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeIcon.classList.remove("fa-sun");

    themeIcon.classList.add("fa-moon");

}



themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");


    const isLight =
        document.body.classList.contains("light");


    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );


    if (isLight) {

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

    } else {

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    }

});



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* ================= CONTACT FORM ================= */

const contactForm =
    document.querySelector(".contact-form");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const button =
            contactForm.querySelector("button");


        const originalContent =
            button.innerHTML;


        button.innerHTML =
            'Message Ready <i class="fa-solid fa-check"></i>';


        button.disabled = true;


        setTimeout(() => {

            button.innerHTML =
                originalContent;

            button.disabled = false;

            contactForm.reset();

        }, 2500);

    }
);



/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");


const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {


    let currentSection = "";


    sections.forEach(section => {


        const sectionTop =
            section.offsetTop - 150;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {


        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});