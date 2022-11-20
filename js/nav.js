const navBtn = document.querySelector("#mobile-navigation-btn");
const mobileNav = document.querySelector("#mobile-menu");
const urlSearch =
  "https://frithjof.shop/test/wp-json/wp/v2/posts?per_page=12&_embed";
const searchInput = document.querySelector("#search-input");
const searchIcon = document.querySelector("#search-icon");
const displayedResults = document.querySelector("#displayed-results");
let searchArray = [];

/*menu*/
document.addEventListener("click", (event) => {
  if (
    event.target.matches("#mobile-navigation-btn") ||
    event.target.matches("#search-icon")
  ) {
    mobileNav.classList.toggle("active");
    navBtn.classList.toggle("fa-xmark");
  }
});

/*search-function*/
searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.trim().toLowerCase();
  displayedResults.innerHTML = "";
  const searchResults = searchArray.filter((matchingPost) =>
    matchingPost.title.rendered.toLowerCase().includes(searchValue)
  );
  if (searchValue.length > 1) {
    for (i = 0; i < searchResults.length; i++) {
      displayedResults.style.display = "block";
      let filteredPostTitle = searchResults[i].title.rendered;
      let filteredPostId = searchResults[i].id;
      let filteredPostDaste = searchResults[i].date;
      displayedResults.innerHTML += `<div><a class="link" href="blog-specific.html?id=${filteredPostId}">${filteredPostTitle}</a><span> - (${filteredPostDaste})</span></div>`;
    }
  } else {
    displayedResults.style.display = "none";
  }
});

/*fetching data for search results */
async function search() {
  const response = await fetch(urlSearch);
  searchArray = await response.json();
}
search();
