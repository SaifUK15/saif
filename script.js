document.addEventListener("DOMContentLoaded", function() {
    AOS.init({ duration: 800 });

    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider-image");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    document.querySelector(".fa-chevron-right").addEventListener("click", nextSlide);
    document.querySelector(".fa-chevron-left").addEventListener("click", prevSlide);

    setInterval(nextSlide, 5000); // Automatically change slide every 5 seconds
});
