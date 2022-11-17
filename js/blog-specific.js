const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const queryId = params.get("id");
const url = `https://frithjof.shop/test/wp-json/wp/v2/posts/${queryId}?_embed`;
const main = document.querySelector("main");
const mainTitle = document.querySelector("title");

async function getPost() {
  try {
    const response = await fetch(url);
    const post = await response.json();
    console.log(post);
    let description = post.content.rendered;
    let title = post.title.rendered;
    let image = post._embedded["wp:featuredmedia"]["0"].source_url;
    let author = post._embedded["author"]["0"].name;
    let date = post.date;
    mainTitle.innerHTML = title + " " + "- The Mountain Blog";
    main.innerHTML = `<div class="blog-post-specific">
        <img src="${image}" class="" id="specific-image" alt="${title}">
          <section>
            <h1>${title}</h1>
            <p>
            <div class="post-metadata">${author}</div>
            <div class="post-metadata">${date}</div>
          </p>
            <p>
              ${description}
            </p>
      </div>`;
  } catch (error) {
    main.innerHTML = `<div class="blog-post-specific">We we're unable to find the blog post you were looking for. Please try again</div>`;
  }
}
getPost();

document.addEventListener("click", (event) => {
  const mainImage = document.querySelector("#specific-image");
  if (event.target.matches("#specific-image") && window.innerWidth >= 1250) {
    console.log(event.target.id);
    mainImage.classList.add("focus");
  } else {
    mainImage.classList.remove("focus");
  }
});
