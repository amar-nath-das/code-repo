var documentBody = document.querySelector("body");
var mobileMenuTrigger = document.querySelector(".navbar .btnMobileTrigger");
var submeu = document.querySelectorAll(".submenu");

function mobileTrigger() {
  documentBody.classList.toggle("mobileMenu-active");
}

if (mobileMenuTrigger) {
  mobileMenuTrigger.addEventListener("click", () => {
    mobileTrigger();
  });
}

function scrollHeader() {
  var scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  var headerElement = documentBody.querySelector(".header");

  if (scrollTop >= 50) {
    headerElement.classList.add("scrolled-header");
  } else {
    headerElement.classList.remove("scrolled-header");
  }
}
window.addEventListener("scroll", () => {
  scrollHeader();
});

function placeArrow(item) {
  if (window.innerWidth > 1159) {
    var arrow = item.querySelector(".inArrow");
    var refArrow = item.parentElement.querySelector("figure");

    arrow.setAttribute(
      "style",
      "left:calc(50% + " + refArrow.offsetLeft + "px);"
    );
  }
}

submeu.forEach(item => {
  placeArrow(item);
});

window.addEventListener("resize", () => {
  submeu.forEach(item => {
    placeArrow(item);
  });
});

window.addEventListener("load", () => {
  submeu.forEach(item => {
    placeArrow(item);
  });
});
