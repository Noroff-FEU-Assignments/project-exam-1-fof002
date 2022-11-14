import { createSimplePost } from "./functions.js";
const url = "https://frithjof.shop/test/wp-json/wp/v2/posts?_embed";
const arrowRight = document.querySelector("#arrow-right");
const arrowLeft = document.querySelector("#arrow-left");
const blogPostContainer = document.querySelector("#blog-post-container");

//FETCHING BLOGPOSTS
async function getBlogPosts() {
  blogPostContainer.innerHTML = `<div class="loader"></div>`;
  /*try {*/
  const response = await fetch(url);
  const blogPosts = await response.json();
  console.log(blogPosts);
  blogPostContainer.innerHTML = "";
  for (let i = 0; i < 11; i++) {
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
  /*} catch {
    blogPosts.innerHTML =
      "Something went wrong! Try again shortly. If this doesn't work, Contact us for assitance";
  }*/
}
getBlogPosts();

arrowLeft.addEventListener("click", () => {
  if (blogPostContainer.classList.contains("carousel-right")) {
    blogPostContainer.classList.add("carousel-left");
    arrowLeft.style.display = "none";
    arrowRight.style.display = "block";
  }
});
arrowRight.addEventListener("click", () => {
  blogPostContainer.classList.remove("carousel-left");
  blogPostContainer.classList.add("carousel-right");
  arrowLeft.style.display = "block";
  arrowRight.style.display = "none";
});
