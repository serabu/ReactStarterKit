const slides = document.querySelectorAll('.slideshow__slide');
  let slideIndex = 1;
  slideShow(slideIndex);
  
  function toggleSlide(num) {
    slideShow(slideIndex += num);
  }
  
  function slideShow(num) {
   let picture;
   if (num > slides.length) {slideIndex = 1};
   if (num < 1) {slideIndex = slides.length};
   for (picture = 0; picture < slides.length; picture++) {
    slides[picture].style.overflow = "hidden";
   }
   slides[slideIndex-1].style.display = "block"
  }