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

    let selectedDiv = document.querySelector('.slider-links .title:nth-child(' + index + ')');
    let allImages = document.querySelectorAll('.red-stck');
    for (let j = 0; j < allImages.length; j++) {
      allImages[j].style.display = "none";
  }

  let selectedImage = selectedDiv.querySelector('.red-stck');
  if (selectedImage) {
    selectedImage.style.display = "block";
}
}

