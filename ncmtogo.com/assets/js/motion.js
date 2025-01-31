document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");

    if (slides.length === 0) {
        console.error("Aucune slide trouvée !");
        return;
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        slideIndex += n;
        if (slideIndex >= slides.length) slideIndex = 0;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        showSlides(slideIndex);
    }

    function currentSlide(n) {
        slideIndex = n - 1;
        showSlides(slideIndex);
    }

    function showSlides(n) {
        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.classList.remove("active"));

        if (slides[n]) { 
            slides[n].style.display = "block"; 
            dots[n].classList.add("active"); 
        }
    }

    // Auto-slide toutes les 3 secondes
    setInterval(() => { plusSlides(1); }, 3000);


    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => currentSlide(index + 1));
    });

    // ✅ Exposer les fonctions au global pour éviter l'erreur
    window.currentSlide = currentSlide;
    window.plusSlides = plusSlides;
});
