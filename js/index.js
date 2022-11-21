import { createSimplePost } from "./functions.js";
const url = "https://frithjof.shop/test/wp-json/wp/v2/posts?per_page=12&_embed";
const arrowRight = document.querySelector("#arrow-right");
const arrowLeft = document.querySelector("#arrow-left");
const blogPostContainer = document.querySelector("#blog-post-container");
const backgroundLoader = document.querySelector("#background-loader");
let counterMax = "";
let counter = 0;

//FETCHING BLOGPOSTS
async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();
    arrowRight.style.display = "block";
    backgroundLoader.style.display = "none";
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
    blogPostContainer.innerHTML = `<p>Something went wrong! Try again shortly. If this doesn't work, Contact us for assitance</p>`;
    arrowRight.style.display = "none";
    arrowLeft.style.display = "none";
  }
}

/*resets the slider if user resizes the screen. to avoid high values if the screen get bigger*/
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1250) {
    counterMax = 2;
  }
  if (window.innerWidth > 950 && window.innerWidth < 1250) {
    counterMax = 5;
  }
  if (window.innerWidth < 950) {
    counterMax = 11;
  }
  if (counter > counterMax) {
    counter = 0;
    blogPostContainer.style.left = 0;
    arrowLeft.style.display = "none";
  }
});

/*Slider function */
document.addEventListener("click", (event) => {
  if (window.innerWidth >= 1250) {
    counterMax = 2;
  }
  if (window.innerWidth > 950 && window.innerWidth < 1250) {
    counterMax = 5;
  }
  if (window.innerWidth < 950) {
    counterMax = 11;
  }
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
    if (counter === 1 || counter === 0) {
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
getBlogPosts();
