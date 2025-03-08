let currentIndex = 0;
const projects = document.querySelector('.projects');
const projectSlides = document.querySelectorAll('.project');
const totalSlides = projectSlides.length;
const projectImg = document.querySelectorAll('.project-img');

projectSlides.forEach((el, i) => {
    if (i === currentIndex) {
        el.style.visibility = 'visible';
    } else {
        el.style.visibility = 'hidden';
    }
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateSlider();
});

function updateSlider() {
    projectSlides.forEach((el, i) => {
        if (i === currentIndex) {
            el.style.visibility = 'visible';
        } else {
            el.style.visibility = 'hidden';
        }
    });
    
    const slideWidth = projectSlides[0].offsetWidth + 32;
    projects.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}