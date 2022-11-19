const navBtn = document.querySelector("#mobile-navigation-btn");
const mobileNav = document.querySelector("#mobile-menu");
const searchInput = document.querySelector("#search-input");
let searchResults = [];
const url = `https://frithjof.shop/test/wp-json/wp/v2/posts?_embed`;

async function postArray() {
  response = await fetch(url);
  post = await response.json();
  console.log(post);
}
/*Menu toggle */

navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  navBtn.classList.toggle("fa-xmark");
});

/*Search function */

searchInput.addEventListener("keyup", () => {
  const results = post.filter((result) =>
    result.title.rendered.startsWith(searchInput.value.toLowerCase())
  );
  console.log(results);
});
postArray();
