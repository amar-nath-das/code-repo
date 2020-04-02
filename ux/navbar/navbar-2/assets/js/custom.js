var documentBody = document.querySelector("body");
var mobileMenuTrigger = document.querySelector(".navbar .btnMobileTrigger");
var hoverMenuItems = documentBody.querySelectorAll(".menuNav>li");
var hoverMenuBackground = documentBody.querySelector(".listingUnderlay");

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

function positionNavbackground(el) {
  var xPos, yPos;
  var childMenu = el.querySelector(".submenu"),
    innerLay = documentBody.querySelector(".innerUnderLay"),
    childMenuHeight,
    childMenuWidth;

  childMenu.setAttribute(
    "style",
    "display: block; opacity: 1; visibility: visible;"
  );
  innerLay.style.opacity = 1;

  childMenuHeight = childMenu.clientHeight;
  childMenuWidth = childMenu.clientWidth;
  xPos = childMenu.getBoundingClientRect().x;
  yPos = childMenu.getBoundingClientRect().y;

  hoverMenuBackground.setAttribute(
    "style",
    `width: ${childMenuWidth}px; height: ${childMenuHeight}px; left: ${xPos}px; top: ${yPos}px; opacity: 1`
  );
}

function resetNavbackground() {
  var childMenu = documentBody.querySelectorAll(".submenu");
  var innerLay = documentBody.querySelector(".innerUnderLay");
  childMenu.forEach(e => {
    e.setAttribute("style", "display: none;opacity: 0;visibility: hidden;");
  });
  innerLay.setAttribute("style", "opacity: 0");
  hoverMenuBackground.setAttribute("style", `width: 0px; height: 0px;`);
}

hoverMenuItems.forEach(item => {
  item.addEventListener("mouseenter", function() {
    if (window.innerWidth > 767) {
      if (item.querySelector(".submenu")) {
        positionNavbackground(item);
      }
    }
  });
  item.addEventListener("mouseleave", function() {
    if (window.innerWidth > 767) {
      resetNavbackground();
    }
  });
});

window.addEventListener("resize", () => resetNavbackground());

window.addEventListener("load", () => resetNavbackground());
