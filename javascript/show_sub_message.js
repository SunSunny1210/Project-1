const message = document.querySelector('.sub-message');

function showMessageQ() {
    const email = document.querySelector('.questions input');

    if (email != null) {
        document.querySelector('.questions button').onclick = function (event) {
            event.preventDefault();

            const inputValue = email.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (inputValue === '') {
                alert('Email field empty. Please, enter a valid email.');
            } else if (!emailRegex.test(inputValue)) {
                alert('Invalid email. Please, enter a valid email.');
            } else {
                message.classList.add('visible');
            }
        }
    }
}

function closeMessage() {
    const close = document.querySelector('.sub-message .x');
    const closeBtn = document.querySelector('.sub-message button');
    close.onclick = function () {
        message.classList.remove('visible');
    }

    closeBtn.onclick = function () {
        message.classList.remove('visible');
    }
}

showMessageQ();
closeMessage();
