const mediaquote = [
  { id: 1, image: "../images/img-mediaquote1.png" },
  { id: 2, image: "../images/img-mediaquote2.png" },
  { id: 3, image: "../images/img-mediaquote3.png" },
  { id: 4, image: "../images/img-mediaquote4.png" },
  { id: 5, image: "../images/img-mediaquote5.png" },
  { id: 6, image: "../images/img-mediaquote6.png" },
  { id: 7, image: "../images/img-mediaquote7.png" },
  { id: 8, image: "../images/img-mediaquote8.png" },
  { id: 9, image: "../images/img-mediaquote9.png" },
  { id: 10, image: "../images/img-mediaquote10.png" },
  { id: 11, image: "../images/img-mediaquote11.png" },
  { id: 12, image: "../images/img-mediaquote12.png" },
  { id: 13, image: "../images/img-mediaquote13.png" },
  { id: 14, image: "../images/img-mediaquote14.png" },
  { id: 15, image: "../images/img-mediaquote15.png" },
  { id: 16, image: "../images/img-mediaquote16.png" },
  { id: 17, image: "../images/img-mediaquote17.png" },
  { id: 18, image: "../images/img-mediaquote18.png" },
  { id: 19, image: "../images/img-mediaquote19.png" },
  { id: 20, image: "../images/img-mediaquote20.png" },
  { id: 21, image: "../images/img-mediaquote21.png" },
  { id: 22, image: "../images/img-mediaquote22.png" },
  { id: 23, image: "../images/img-mediaquote23.png" },
  { id: 24, image: "../images/img-mediaquote24.png" },
];
let perPage = 8;
let currentPage = 1;
let start = 0;
let end = perPage;
const totalPages = Math.ceil(mediaquote.length / perPage);

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

function getCurrentPage(currentPage) {
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
}

function renderMedia() {
  let mediaquoteHTML = "";
  const content = mediaquote.map((item, index) => {
    if (index >= start && index < end) {
      mediaquoteHTML += '<div class="mediaquote-item">';
      mediaquoteHTML += "<a>";
      mediaquoteHTML += '<img class="mediaquote-image" src=' + item.image + ">";
      mediaquoteHTML += "</a>";
      mediaquoteHTML += '<div class="content">';
      mediaquoteHTML += '<div class="zoom-text">';
      mediaquoteHTML += '<i class="fas fa-search-plus">Click</i>';
      mediaquoteHTML += "</div>";
      mediaquoteHTML += "</div>";
      mediaquoteHTML += "</div>";
      return mediaquoteHTML;
    }
  });
  document.getElementById("mediaquote-list").innerHTML = mediaquoteHTML;
}
renderMedia();

function renderListPage() {
  let mediaquoteHTML = "";
  mediaquoteHTML += `<li class="active"><a>${1}</a></li>`;
  for (let i = 2; i <= totalPages; i++) {
    mediaquoteHTML += `<li><a>${i}</a></li>`;
  }
  document.getElementById("number-page").innerHTML = mediaquoteHTML;
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
const allImages = document.querySelectorAll(".mediaquote-item");
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
  imageBox.style.background = `url(../images/img-mediaquote${currentImageIdx}.png) center/ contain no-repeat`;
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
  if (currentImageIdx === 24) {
    currentImageIdx = 1;
  }
  currentImageDisplay(currentImageIdx);
});
