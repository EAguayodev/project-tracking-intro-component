const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("show-nav");
  menu.classList.toggle("show-nav");
});