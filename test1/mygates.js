var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

// Show the first slide
slides[currentSlide].style.display = "block";

// Function to move to the next slide
function nextSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);
