document.addEventListener("DOMContentLoaded", () => {
    var tl = gsap.timeline();

    // LOADER
    let load = document.querySelector(".loader");
    if (load) {
        setTimeout(() => {
            load.style.display = "none";
        }, 10);
    }

    // ANIMATING HEADER TEXT
    var lh = document.querySelector("#lh");
    if (lh) {
        var lhsplit = lh.textContent.trim().split(''); // Split into individual letters
        lh.innerHTML = lhsplit.map(letter => `<span class="fire-text">${letter}</span>`).join('');

        let spans = document.querySelectorAll("#lh span");
        spans.forEach((span, index) => {
            span.style.zIndex = spans.length - index; // Stack order
        });

        gsap.from("#lh span", {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: "power3.out",
            stagger: 0.1
        });
    }

    // NAVBAR ANIMATION
    gsap.from("nav ul li", {
        delay: 0.5,
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.1
    });

    // CONTENT ANIMATION (cont2)
    let cont2 = document.querySelector("#cont2 p");
    if (cont2) {
        let cont2split = cont2.textContent.trim().split('');
        cont2.innerHTML = cont2split.map(letter => `<span>${letter}</span>`).join('');

        let spans2 = document.querySelectorAll("#cont2 p span");
        spans2.forEach((span, index) => {
            span.style.zIndex = spans2.length - index; // Stack order
        });

        gsap.from("#cont2 p span", {
            duration: 1.4,
            opacity: 0,
            ease: "power3.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: "#cont2 p",
                scroller: "body",
                start: "top 80%",
                end: "top 50%",
            }
        });
    }

    // MOBILE MENU FUNCTION
    function mobileMenu() {
        let menu = document.querySelector("#menu");
        let cross = document.querySelector("#cross");
        let mobnav = document.querySelector("#mobnav");

        // Ensure all elements exist before adding event listeners
        if (!menu || !cross || !mobnav) {
            console.warn("Menu elements not found on this page.");
            return;
        }

        menu.addEventListener("click", () => {
            mobnav.style.display = "flex";
            cross.style.display = "block";
            menu.style.display = "none";

            tl.from("#mobnav", {
                transform: "translateX(100%)",
                ease: "power3.out",
                duration: 1,
            });

            tl.from("#mobnav ul li, #mobnav button", {
                duration: 1,
                y: -50,
                opacity: 0,
                ease: "power3.out",
                stagger: 0.1,
            });
        });

        cross.addEventListener("click", () => {
            mobnav.style.display = "none";
            cross.style.display = "none";
            menu.style.display = "block";
        });
    }

    mobileMenu(); // Initialize mobile menu after DOM is loaded
});
