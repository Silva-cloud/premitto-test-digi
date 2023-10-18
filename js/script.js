import "bootstrap";

// carousel code

const carouselWidth =
  document.getElementsByClassName("carousel-inner")[0].scrollWidth;

const cardWidth =
  document.getElementsByClassName("carousel-item")[0].clientWidth;
console.log(carouselWidth, cardWidth);

const carouselNextButton = document.getElementsByClassName("carousel-next")[0];

const carouselPrevButton = document.getElementsByClassName("carousel-prev")[0];

let scrollPosition = 0;

console.log(scrollPosition);

carouselNextButton.addEventListener("click", function () {
  if (scrollPosition < carouselWidth - cardWidth * 3) {
    console.log("next");
    scrollPosition = scrollPosition + cardWidth;
    console.log("scrollPosition", scrollPosition);
    document.getElementsByClassName("carousel-inner")[0].scrollLeft =
      scrollPosition;
  }
});

carouselPrevButton.addEventListener("click", function () {
  if (scrollPosition > 0) {
    console.log("prev");
    scrollPosition = scrollPosition - cardWidth;
    console.log("scrollPosition", scrollPosition);
    document.getElementsByClassName("carousel-inner")[0].scrollLeft =
      scrollPosition;
  }
});
