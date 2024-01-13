 // Email Validate Function Code

 function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const errorIcon = document.getElementById('errorIcon');
    const errorMessage = document.querySelector('.error-message');
    const mailBtn = document.querySelector('.mail-btn');
    const emailborder = document.getElementById('emailborder');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailInput.value)) {
        errorMessage.style.display = 'none';
        alert('Kaydınız başarılı, artık haberlerimizi ve güncellemelerimizi görebileceksiniz!');
        emailborder.style.border = '2px solid transparent';
        errorIcon.style.display = 'none';

        emailInput.value = '';
    } else {
        emailborder.style.border = '2px solid var(--WarmRed)';
        errorIcon.style.display = 'inline';
        errorMessage.style.display = 'block';
        mailBtn.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const errorIcon = document.getElementById('errorIcon');
    const errorMessage = document.querySelector('.error-message');
    const mailBtn = document.querySelector('.mail-btn');
    const emailborder = document.getElementById('emailborder');

    emailInput.addEventListener('input', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(emailInput.value)) {

            errorIcon.style.display = 'none';
            errorMessage.style.display = 'none';
            emailborder.style.border = '0';
            mailBtn.classList.add('active');
        } else {
            
            errorIcon.style.display = 'inline';
            errorMessage.style.display = 'block';
            emailborder.style.border = '2px solid var(--WarmRed)';
            mailBtn.classList.remove('active');
        }
    });
});