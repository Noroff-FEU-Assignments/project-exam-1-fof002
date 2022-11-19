const navBtn = document.querySelector("#mobile-navigation-btn");
const mobileNav = document.querySelector("#mobile-menu");

navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  navBtn.classList.toggle("fa-xmark");
});

/*
searchInput.addEventListener("keyup", () => {
  const results = post.filter((result) =>
    result.title.rendered.startsWith(searchInput.value.toLowerCase())
  );
  console.log(results);
});
postArray();
*/
