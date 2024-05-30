
var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
  displaySlides(slide_index += n);
}

function currentSlide(n) {
  displaySlides(slide_index = n);
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) { slide_index = 1 }
  if (n < 1) { slide_index = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}


var rightsectionanchors = document.querySelectorAll('.rightsectionflex .list_marks li a');
var leftsectionimg = document.querySelector('.leftsectionimage');

rightsectionanchors.forEach(function (anchor) {
  anchor.addEventListener("mouseover", function () {
    var image = this.getAttribute('data-image');
    leftsectionimg.setAttribute('src', image);
  });
});



var readmore = document.querySelectorAll('.read_more');

readmore.forEach(function (display) {
  display.addEventListener("click", function () {
    var textcontainer = this.parentNode;
    textcontainer.classList.toggle('expanded');
  });
});


var regi = document.querySelector(".registration-button").addEventListener("click", function () {
  window.location.href = "../public/registration.html";
});

var logi = document.querySelector(".login-button").addEventListener("click", function () {
  window.location.href = "../public/login.html";
});

 var appointbtn = document.querySelector(".appoint").addEventListener("click", function(){
  window.location.href = "../public/Appointmentform.html"
 })