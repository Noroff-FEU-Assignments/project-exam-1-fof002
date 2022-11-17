const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const queryId = params.get("id");
const url = `https://frithjof.shop/test/wp-json/wp/v2/posts/${queryId}`;
const main = document.querySelector("main");

async function getPost() {
  const response = await fetch(url);
  const blogPost = await response.json();
  main.innerHTML = blogPost.content.rendered;
  console.log(blogPost);
}
getPost();
