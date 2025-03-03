const infoBtn = document.querySelector('.more-info');
const navInfo = document.querySelector('.nav-bar-menu');

infoBtn.onclick = () => {
    navInfo.classList.toggle('active');
}