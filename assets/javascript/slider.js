//Slider Algoritması
document.addEventListener("DOMContentLoaded", function() {
  showContent(1); // Sayfa yüklendiğinde gelecek içeriği göstermek için 
  window.addEventListener("resize", function() {
      showContent(1); // Pencere boyutu değiştiğinde içeriğin column veya row olmasını anlık değiştirmek için
  });
});

function showContent(index) {
  let contents = document.getElementsByClassName("content");
  let windowWidth = window.innerWidth;

  for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
  }

  let contentId = "content" + index;
  let selectedContent = document.getElementById(contentId);

  if (selectedContent) {
      selectedContent.style.display = "flex";
      selectedContent.style.flexDirection = windowWidth >= 1440 ? "row" : "column";
  }

  let selectedDiv = document.querySelector('.slider-links .title:nth-child(' + index + ')');
  let allImages = document.querySelectorAll('.red-stck');

  for (let j = 0; j < allImages.length; j++) {
      allImages[j].style.display = "none";
  }

  let selectedImage = selectedDiv.querySelector('.red-stck');

  if (selectedImage) {
      selectedImage.style.display = "flex";
  }
}

