//Created by katdotexe on 3/2/2021

var slides = document.querySelectorAll('#slides .slides');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
  slides[currentSlide].className = 'slides';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slides showing';
}
