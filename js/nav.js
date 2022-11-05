const navBtn = document.querySelector("#mobile-navigation-btn");
const mobileNav = document.querySelector("#mobile-menu");

navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  navBtn.classList.toggle("fa-xmark");
});
