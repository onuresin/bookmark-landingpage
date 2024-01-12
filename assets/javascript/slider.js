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