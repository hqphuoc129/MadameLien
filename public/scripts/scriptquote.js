"use strict";var zoomBtn=document.querySelectorAll(".zoom-text"),allImages=document.querySelectorAll(".mediaquote-item"),imageView=document.querySelector(".image-view"),nextBtn=document.getElementById("next-btn"),prevBtn=document.getElementById("prev-btn"),imageBox=document.querySelector(".image-box"),currentImageIdx=0;function currentImageDisplay(e){imageBox.style.background="url(../images/img-mediaquote"+currentImageIdx+".png) center/cover no-repeat"}imageView.addEventListener("click",function(){this.style.display="none",imageBox.style.display="none"}),zoomBtn.forEach(function(e,t){e.addEventListener("click",function(){imageView.style.display="block",imageBox.style.display="block",currentImageDisplay(currentImageIdx=t+1)})}),prevBtn.addEventListener("click",function(){currentImageDisplay(currentImageIdx=0===--currentImageIdx?allImages.length:currentImageIdx)}),nextBtn.addEventListener("click",function(){currentImageDisplay(currentImageIdx=10===++currentImageIdx?1:currentImageIdx)});