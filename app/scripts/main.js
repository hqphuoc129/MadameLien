const menuToggle = document.querySelectorAll('[class$="-toggle"]')[0];
const menuHeader = document.querySelectorAll('[class$="-menu"]')[0];
const originHeader  = document.querySelector(".headerbio-menu");
const expandClass = "is-expand";
// get class name form querySelector
const menuToggleClass = menuToggle.className;
//regex pattern match class name between " " and  -toggle
const menuToggleClassName = menuToggleClass.match(/\S+-toggle/g)[0];

console.log(menuToggleClassName);

// console.log(menuToggleClass);
menuToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
  console.log("clicked");
});
window.addEventListener("click", function (e) {
  if (!menuHeader.contains(e.target) && !e.target.matches(`.${menuToggleClassName}`)) {
    menuHeader.classList.remove(expandClass);
  }
});
// Slick slider
$(document).ready(function () {
  $(".quote-container").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slide: 'div',
    cssEase: 'linear',
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
  });
});