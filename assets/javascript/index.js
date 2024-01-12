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