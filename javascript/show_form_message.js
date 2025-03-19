const message = document.querySelector('.sub-message');

function showMessageF() {
    const fullNameM = document.querySelector('.mobile #name');
    const emailM = document.querySelector('.mobile #email');
    const phoneM = document.querySelector('.mobile #phone');
    const fullNameD = document.querySelector('.desktop #name');
    const emailD = document.querySelector('.desktop #email');
    const phoneD = document.querySelector('.desktop #phone');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+34|0034)?[6-9]\d{8}$/;

    function validateInput (fullName, email, phone) {
        const fullNameValue = fullName.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();

        if (fullNameValue === '' || emailValue === '' || phoneValue === '') {
            alert('Field empty. Please, enter valid data.');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            alert('Invalid email. Please, enter valid email.');
            return false;
        } else if (!phoneRegex.test(phoneValue)) {
            alert('Invalid phone number. Please, enter valid phone number.')
        } else {
            return true;
        }
    }

    document.querySelector('.mobile button').onclick = function(event) {
        event.preventDefault();

        const isMobileValid = validateInput(fullNameM, emailM, phoneM);
    
        if (isMobileValid) {
            message.classList.add('visible');
        }
    }

    document.querySelector('.desktop button').onclick = function(event) {
        event.preventDefault();
        const isDesktopValid = validateInput(fullNameD, emailD, phoneD);
    
        if (isDesktopValid) {
            message.classList.add('visible');
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

showMessageF();
closeMessage();