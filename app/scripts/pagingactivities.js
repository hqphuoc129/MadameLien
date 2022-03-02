const media = [
  { id: 1, image: "../images/img-mediaactivities1.png" },
  { id: 2, image: "../images/img-mediaactivities2.png" },
  { id: 3, image: "../images/img-mediaactivities3.png" },
  { id: 4, image: "../images/img-mediaactivities4.png" },
  { id: 5, image: "../images/img-mediaactivities5.png" },
  { id: 6, image: "../images/img-mediaactivities6.png" },
  { id: 7, image: "../images/img-mediaactivities7.png" },
  { id: 8, image: "../images/img-mediaactivities8.png" },
  { id: 9, image: "../images/img-mediaactivities9.png" },
  { id: 10, image: "../images/img-mediaactivities10.png" },
  { id: 11, image: "../images/img-mediaactivities11.png" },
  { id: 12, image: "../images/img-mediaactivities12.png" },
  { id: 13, image: "../images/img-mediaactivities13.png" },
  { id: 14, image: "../images/img-mediaactivities14.png" },
  { id: 15, image: "../images/img-mediaactivities15.png" },
  { id: 16, image: "../images/img-mediaactivities16.png" },
];
let perPage = 8;
let currentPage = 1;
let start = 0;
let end = perPage;
const totalPages = Math.ceil(media.length / perPage);

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

function getCurrentPage(currentPage) {
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
}

function renderMedia() {
  let mediaHTML = "";
  const content = media.map((item, index) => {
    if (index >= start && index < end) {
      mediaHTML += '<div class="mediaactivities-item">';
      mediaHTML += "<a>";
      mediaHTML += '<img class="mediaactivities-image" src=' + item.image + ">";
      mediaHTML += "</a>";
      mediaHTML += '<div class="content">';
      mediaHTML += '<div class="zoom-text">';
      mediaHTML += '<i class="fas fa-search-plus">Click</i>';
      mediaHTML += "</div>";
      mediaHTML += "</div>";
      mediaHTML += "</div>";
      return mediaHTML;
    }
  });
  document.getElementById("mediaactivities-list").innerHTML = mediaHTML;
}
renderMedia();

function renderListPage() {
  let mediaHTML = "";
  mediaHTML += `<li class="active"><a>${1}</a></li>`;
  for (let i = 2; i <= totalPages; i++) {
    mediaHTML += `<li><a>${i}</a></li>`;
  }
  document.getElementById("number-page").innerHTML = mediaHTML;
}
renderListPage();
function changePage() {
  const currentPages = document.querySelectorAll(".number-page li");
  for (let i = 0; i < currentPages.length; i++) {
    currentPages[i].addEventListener("click", () => {
      let value = i + 1;
      currentPage = value;
      $(".number-page li").removeClass("active");
      currentPages[i].classList.add("active");
      if (currentPage > 1 && currentPage < totalPages) {
        $(".btn-prev").removeClass("btn-active");
        $(".btn-next").removeClass("btn-active");
      }
      if (currentPage === 1) {
        $(".btn-prev").addClass("btn-active");
      }
      if (currentPage === totalPages) {
        $(".btn-next").addClass("btn-active");
      }
      getCurrentPage(currentPage);
      renderMedia();
    });
  }
}
changePage();

btnNext.addEventListener("click", () => {
  currentPage++;
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  if (currentPage === totalPages) {
    $(".btn-next").addClass("btn-active");
  }
  $(".btn-prev").removeClass("btn-active");
  $(".number-page li").removeClass("active");
  $(`.number-page li:eq(${currentPage - 1})`).addClass("active");
  getCurrentPage(currentPage);
  renderMedia();
});
btnPrev.addEventListener("click", () => {
  currentPage--;
  if (currentPage <= 1) {
    currentPage = 1;
  }
  if (currentPage === 1) {
    $(".btn-prev").addClass("btn-active");
  }
  $(".btn-next").removeClass("btn-active");
  $(".number-page li").removeClass("active");
  $(`.number-page li:eq(${currentPage - 1})`).addClass("active");
  getCurrentPage(currentPage);
  renderMedia();
});

const zoomBtn = document.querySelectorAll(".zoom-text");
const allImages = document.querySelectorAll(".mediaactivities-item");
const imageView = document.querySelector(".image-view");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const imageBox = document.querySelector(".image-box");

let currentImageIdx = 0;

imageView.addEventListener("click", function () {
  this.style.display = "none";
  imageBox.style.display = "none";
});

zoomBtn.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    imageView.style.display = "block";
    imageBox.style.display = "block";
    currentImageIdx = index + 1;
    currentImageDisplay(currentImageIdx);
  });
});

function currentImageDisplay(position) {
  imageBox.style.background = `url(../images/img-mediaactivities${currentImageIdx}.png) center/contain no-repeat`;
}

prevBtn.addEventListener("click", function () {
  currentImageIdx--;
  if (currentImageIdx === 0) {
    currentImageIdx = allImages.length;
  }
  currentImageDisplay(currentImageIdx);
});

nextBtn.addEventListener("click", function () {
  currentImageIdx++;
  if (currentImageIdx === 16) {
    currentImageIdx = 1;
  }
  currentImageDisplay(currentImageIdx);
});
