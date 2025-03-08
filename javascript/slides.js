let currentIndex = 0; // Track the current slide
const projects = document.querySelector('.projects');
const projectSlides = document.querySelectorAll('.project');
const totalSlides = projectSlides.length;

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    updateSlider();
});

function updateSlider() {
    const slideWidth = projectSlides[0].offsetWidth + 32; // Slide width + gap (32px in this case)
    projects.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}