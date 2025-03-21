document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide() {
        slides.forEach(slide => slide.classList.remove("active")); // Hide all slides
        slides[index].classList.add("active"); // Show current slide
        index = (index + 1) % slides.length; // Move to next slide
    }

    showSlide(); // Ensure first slide is displayed correctly
    setInterval(showSlide, 5000); // Change slide every 3 seconds
});
