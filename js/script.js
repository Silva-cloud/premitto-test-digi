import "bootstrap";

// change active header navlink color

document.addEventListener("DOMContentLoaded", function () {
  const HeaderNavLinks = document.querySelectorAll(
    ".header-container .navbar-nav  a, .navbar-brand"
  );

  const clickedHeaderNavLink =
    HeaderNavLinks[localStorage.getItem("clickedHeaderNavLinkIndex")];

  HeaderNavLinks.forEach((el, i) => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    }
    clickedHeaderNavLink.classList.add("active");
    el.addEventListener("click", function () {
      localStorage.setItem("clickedHeaderNavLinkIndex", i);
    });
  });
});
// carousel code

const carouselWidth =
  document.getElementsByClassName("carousel-inner")[0].scrollWidth;

const cardWidth =
  document.getElementsByClassName("carousel-item")[0].clientWidth;

const carouselNextButton = document.getElementsByClassName("carousel-next")[0];

const carouselPrevButton = document.getElementsByClassName("carousel-prev")[0];

let scrollPosition = 0;

carouselNextButton.addEventListener("click", function () {
  if (scrollPosition < carouselWidth - cardWidth * 3) {
    scrollPosition = scrollPosition + cardWidth;
    document.getElementsByClassName("carousel-inner")[0].scrollLeft =
      scrollPosition;
  }
});

carouselPrevButton.addEventListener("click", function () {
  if (scrollPosition > 0) {
    scrollPosition = scrollPosition - cardWidth;
    document.getElementsByClassName("carousel-inner")[0].scrollLeft =
      scrollPosition;
  }
});
