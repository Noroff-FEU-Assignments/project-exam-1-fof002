const url = "https://frithjof.shop/test/wp-json/wp/v2/posts/";
const blogPostContainer = document.querySelector("#blog-post-container");
async function getBlogPosts() {
  blogPostContainer.innerHTML = `<div class="loader"></div>`;
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();
    console.log(blogPosts);
    for (let i = 0; i < blogPosts.length; i++) {
      blogPostContainer.innerHTML = "";
      blogPostContainer.innerHTML += `  <div class="blog-post">
      <img
        src="https://i0.wp.com/worldadventuredivers.com/wp-content/uploads/2022/07/IMG_0633r.jpg?w=2000&ssl=1"
        alt=""
        width="100%"
      />
      <div class="content-container">
        <section>
          <h2>This is a heading: lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            dolor quas autem? Nemo, a quos. Non sequi nostrum tempore nemo?
            <a href="#">Read more</a>
          </p>
        </section>
        <div class="meta-container">
          <div>Name Namesen</div>
          <div>3. september - 1 min read</div>
        </div>
      </div>
    </div>`;
    }
  } catch {
    blogPostContainer.innerHTML =
      "Something went wrong! Contact us for assitance";
  }
}
getBlogPosts();
