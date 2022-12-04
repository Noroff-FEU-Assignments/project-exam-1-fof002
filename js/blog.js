import { createSimplePost } from "./functions.js";
const url = "https://frithjof.shop/test/wp-json/wp/v2/posts?per_page=12&_embed";
const blogPostContainer = document.querySelector("#blog-post-container");
const olderPostsBtn = document.querySelector("#load-more");
const backgroundLoader = document.querySelector("#background-loader");

//FETCHING THE FIRST TEN BLOGPOSTS
async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();
    backgroundLoader.style.display = "none";
    for (let i = 0; i < blogPosts.length; i++) {
      let post = blogPosts[i];
      if (i === 10) {
        break;
      } else {
        createSimplePost(
          post.excerpt.rendered,
          post.title.rendered,
          post.id,
          post._embedded["wp:featuredmedia"]["0"].source_url,
          post._embedded["author"]["0"].name,
          post.formatted_date
        );
      }
    }
  } catch {
    olderPostsBtn.style.display = "none";
    blogPostContainer.innerHTML =
      "Something went wrong! Try again shortly. If this doesn't work, contact us for assitance";
  }
}
//FETCHING MORE POSTS BY CLICKING "LOAD MORE POSTS"
olderPostsBtn.addEventListener("click", async () => {
  const postsOnPage = blogPostContainer.childElementCount;
  const latestBlogPost = postsOnPage - 1;
  olderPostsBtn.style.display = "none";
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();
    for (let i = latestBlogPost + 1; i < blogPosts.length; i++) {
      let post = blogPosts[i];
      createSimplePost(
        post.excerpt.rendered,
        post.title.rendered,
        post.id,
        post._embedded["wp:featuredmedia"]["0"].source_url,
        post._embedded["author"]["0"].name,
        post.formatted_date
      );
    }
  } catch {
    olderPostsBtn.style.display = "none";
    blogPostContainer.innerHTML +=
      "We are unable to load more blogposts. Please try again.";
  }
});
getBlogPosts();
