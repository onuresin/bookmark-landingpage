// Hamburger ve Modal Menu algoritması 
const hamburger = document.querySelector(".hamburger");
const modal = document.querySelector(".modal");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    modal.classList.toggle("active");
});

document.querySelectorAll(".modal").forEach((n) => {
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        modal.classList.remove("active");
    });
});
//**************************************************************/

//Slider Algoritması
document.addEventListener("DOMContentLoaded", function() {
    showContent(1);
  });
  
  function showContent(index) {
    let contents = document.getElementsByClassName("content");
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }
  
    let contentId = "content" + index;
    let selectedContent = document.getElementById(contentId);
    if (selectedContent) {
      selectedContent.style.display = "block";
    }
  }
//**************************************************************/


//SSS Algoritması Accordion
document.addEventListener("DOMContentLoaded", function() {
    const accContents = document.querySelectorAll(".acc-content");
  
    accContents.forEach(function(content) {
      const question = content.querySelector(".question");
  
      question.addEventListener("click", function() {
        accContents.forEach(function(innerContent) {
          if (innerContent !== content) {
            innerContent.classList.remove("active");
            innerContent.querySelector(".answer").style.display = "none";
          }
        });
        content.classList.toggle("active");
        const answer = content.querySelector(".answer");
        answer.style.display = answer.style.display === "block" ? "none" : "block";
      });
    });
  });
  //**************************************************************/
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
        alert('Kaydınız başarılı, artık haberler ve güncellemelerimizi görebileceksiniz!');
        emailborder.style.border = '2px solid transparent';
        errorIcon.style.display = 'none';

        // Geçerli email girişi yaptıktan sonra input içeriğini temizle
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
            // Geçerli bir email adresi girdiğinde
            errorIcon.style.display = 'none';
            errorMessage.style.display = 'none';
            emailborder.style.border = '0';
            mailBtn.classList.add('active');
        } else {
            // Geçersiz bir email adresi girdiğinde
            errorIcon.style.display = 'inline';
            errorMessage.style.display = 'block';
            emailborder.style.border = '2px solid var(--WarmRed)';
            mailBtn.classList.remove('active');
        }
    });
});


