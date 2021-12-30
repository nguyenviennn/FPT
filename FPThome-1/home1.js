window.onscroll = function() {myFunction()};
var header = document.getElementById("nav");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function() {
    $('#click-menu').click(function() {
       $('.list-menu').toggleClass('show-menu');
    });
});
