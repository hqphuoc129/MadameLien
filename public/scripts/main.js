"use strict";var menuToggle=document.querySelectorAll('[class$="-toggle"]')[0],menuHeader=document.querySelectorAll('[class$="-menu"]')[0],expandClass=".is-expand";menuToggle.addEventListener("click",function(){menuHeader.classList.add(expandClass)}),window.addEventListener("click",function(e){menuHeader.contains(e.target)||e.target.matches(".header-toggle")||menuHeader.classList.remove(expandClass)}),$(document).ready(function(){$(".quote-container").slick({autoplay:!0,autoplaySpeed:1e3,dots:!1,infinite:!0,speed:500,fade:!0,slide:"div",cssEase:"linear",prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>"})});