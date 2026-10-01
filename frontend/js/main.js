document.addEventListener("DOMContentLoaded", () => {

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");

    if (mobileMenuBtn && mobileNav) {

        mobileMenuBtn.addEventListener("click", () => {
            mobileNav.classList.toggle("active");
        });

        const mobileLinks = mobileNav.querySelectorAll("a");

        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileNav.classList.remove("active");
            });
        });
    }


    const revealElements = document.querySelectorAll(
        ".feature-card, .journey-item, .ai-card, .about-grid, .cta-card"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.1
        }
    );


    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });

});