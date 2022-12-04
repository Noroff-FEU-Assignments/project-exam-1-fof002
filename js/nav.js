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
  displayedResults.style.display = "block";
  displayedResults.innerHTML = `<li id="no-posts">No posts matching your criteria</li>`;
  const searchResults = searchArray.filter((matchingPost) =>
    matchingPost.title.rendered.toLowerCase().includes(searchValue)
  );
  if (searchValue.length > 1 && searchResults.length >= 1) {
    displayedResults.innerHTML = "";
    for (i = 0; i < searchResults.length; i++) {
      let filteredPostTitle = searchResults[i].title.rendered;
      let filteredPostId = searchResults[i].id;
      let filteredPostDaste = searchResults[i].formatted_date;
      displayedResults.innerHTML += `<li><a class="link" href="blog-specific.html?id=${filteredPostId}">${filteredPostTitle}<span> - (${filteredPostDaste})</span></a></li>`;
    }
  }
});

/*fetching data for search results */
async function search() {
  const response = await fetch(urlSearch);
  searchArray = await response.json();
}
search();
