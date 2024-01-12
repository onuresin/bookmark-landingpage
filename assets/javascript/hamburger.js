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