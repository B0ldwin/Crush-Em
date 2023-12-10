let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.opacity = "1";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function plusSlides(n) {
  slideIndex += n;
  let slides = document.getElementsByClassName("slide");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slides[slideIndex - 1].style.opacity = "1";
}
