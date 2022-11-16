import { createSimplePost } from "./functions.js";
const url = "https://frithjof.shop/test/wp-json/wp/v2/posts?per_page=12&_embed";
const arrowRight = document.querySelector("#arrow-right");
const arrowLeft = document.querySelector("#arrow-left");
const blogPostContainer = document.querySelector("#blog-post-container");

//FETCHING BLOGPOSTS
async function getBlogPosts() {
  blogPostContainer.innerHTML = `<div class="loader"></div>`;
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();
    console.log(blogPosts);
    blogPostContainer.innerHTML = "";
    for (let i = 0; i < 12; i++) {
      let post = blogPosts[i];
      createSimplePost(
        post.excerpt.rendered,
        post.title.rendered,
        post.id,
        post._embedded["wp:featuredmedia"]["0"].source_url,
        post._embedded["author"]["0"].name,
        post.date
      );
    }
  } catch (error) {
    mai.innerHTML = `<p>Something went wrong! Try again shortly. If this doesn't work, Contact us for assitance</p>`;
    arrowRight.style.display = "none";
    arrowLeft.style.display = "none";
  }
}
getBlogPosts();

/*IMAGE SLIDER*/

/*set countermax based on width of browser*/
let counterMax = "";
addEventListener("resize", setCounterMax);
function setCounterMax() {
  if (window.innerWidth >= 1250) {
    counterMax = 2;
  }
  if (window.innerWidth < 1250) {
    counterMax = 11;
  }
}
/*Function for slider*/
let counter = 0;
document.addEventListener("click", (event) => {
  if (event.target.matches("#arrow-right")) {
    if (counter === counterMax) {
      blogPostContainer.style.left = 0;
      counter = 0;
      arrowLeft.style.display = "none";
    } else {
      counter++;
      blogPostContainer.style.left = -100 * counter + "%";
      arrowLeft.style.display = "block";
    }
  }
  if (event.target.matches("#arrow-left")) {
    if (counter === 0) {
      counter = 0;
      blogPostContainer.style.left = 0;
      arrowLeft.style.display = "none";
    } else {
      counter--;
      let currentStyleLeft = parseInt(blogPostContainer.style.left);
      blogPostContainer.style.left = 100 + currentStyleLeft + "%";
    }
  }
});
setCounterMax();
