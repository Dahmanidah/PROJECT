// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  });
});
window.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll(".background-image");
  var currentImageIndex = 0;

  setInterval(function() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1;
  }, 1500);
});







