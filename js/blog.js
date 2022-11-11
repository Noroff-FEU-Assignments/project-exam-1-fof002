const url = "https://frithjof.shop/test/wp-json/wp/v2/posts?_embed";
const blogPostContainer = document.querySelector("#blog-post-container");
const olderPostsBtn = document.querySelector("#load-more");

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
      let author = post._embedded["author"]["0"].name;
      let date = post.date;
      if (i === 10) {
        break;
      } else {
        blogPostContainer.innerHTML += `<div class="blog-post">
      <div class="content-container">
      <img src="${image}" alt="">
        <section>
          <h2>${title}</h2>
          <p>
            <div class="post-metadata">${author}</div>
            <div class="post-metadata">${date}</div>
          </p>
          <p>
            ${description}
            <a href="blog-specific.html?id=${id}">Read more</a>
          </p>
      </div>
    </div>`;
      }
    }
  } catch {
    olderPostsBtn.style.display = "none";
    blogPostContainer.innerHTML =
      "Something went wrong! Try again shortly. If this doesn't work, contact us for assitance";
  }
}

olderPostsBtn.addEventListener("click", async () => {
  const postsOnPage = blogPostContainer.childElementCount;
  latestBlogPost = postsOnPage - 1;
  olderPostsBtn.style.display = "none";
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();
    for (let i = latestBlogPost + 1; i < latestBlogPost + 3; i++) {
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
    olderPostsBtn.style.display = "none";
    blogPostContainer.innerHTML += "We are out of older posts!";
  }
});

getBlogPosts();
