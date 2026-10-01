document.addEventListener("DOMContentLoaded", () => {

    const progressBar = document.querySelector(".progress-bar span");

    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = "60%";
        }, 300);
    }


    const pregnancyCard = document.querySelector(".pregnancy-card");

    if (pregnancyCard && window.innerWidth > 768) {

        pregnancyCard.addEventListener("mousemove", event => {

            const rect = pregnancyCard.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 4;
            const rotateX = ((y / rect.height) - 0.5) * -4;

            pregnancyCard.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });


        pregnancyCard.addEventListener("mouseleave", () => {
            pregnancyCard.style.transform = "rotate(2deg)";
        });
    }

});