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