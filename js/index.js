const url = "https://frithjof.shop/test/wp-json/wp/v2/posts?_embed";
const blogPostContainer = document.querySelector("#blog-post-container");
async function getBlogPosts() {
  blogPostContainer.innerHTML = `<div class="loader"></div>`;
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();
    console.log(blogPosts);
    blogPostContainer.innerHTML = "";
    for (let i = 0; i < blogPosts.length; i++) {
      let post = blogPosts[i];
      let description = post.excerpt.rendered;
      let title = post.title.rendered;
      let id = post.id;
      let image = post._embedded["wp:featuredmedia"]["0"].source_url;

      blogPostContainer.innerHTML += `<div class="blog-post">
      <div class="content-container">
      <img src="${image}" alt="">
        <section>
          <h2>${title}</h2>
          <p>
            ${description}
            <a href="blog-specific.html?id=${id}">Read more</a>
          </p>
      </div>
    </div>`;
    }
  } catch {
    blogPostContainer.innerHTML =
      "Something went wrong! Try again shortly. If this doesn't work, Contact us for assitance";
  }
}
getBlogPosts();
