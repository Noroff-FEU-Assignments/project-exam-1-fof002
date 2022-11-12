export function createSimplePost(description, title, id, image, author, date) {
  const blogPostContainer = document.querySelector("#blog-post-container");
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
