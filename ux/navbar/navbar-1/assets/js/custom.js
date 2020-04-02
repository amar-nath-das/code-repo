var documentBody = document.querySelector("body");
var menuTrigger = document.querySelector(".navbar .navbar-trigger");
var mobileMenuTrigger = document.querySelector(".navbar .btnMobileTrigger");

function triggerMenu() {
  documentBody.classList.toggle("menu-active");
}
if (menuTrigger) {
  menuTrigger.addEventListener("click", () => {
    triggerMenu();
  });
}

function mobileTrigger() {
  documentBody.classList.toggle("mobileMenu-active");
}

if (mobileMenuTrigger) {
  mobileMenuTrigger.addEventListener("click", () => {
    mobileTrigger();
  });
}
