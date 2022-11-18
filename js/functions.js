export function createSimplePost(description, title, id, image, author, date) {
  const blogPostContainer = document.querySelector("#blog-post-container");
  blogPostContainer.innerHTML += `<div class="blog-post">
  <a href="blog-specific.html?id=${id}">      
    <div class="content-container">  
      <img src="${image}" alt="">
        <p>
          <h2>${title}</h2>
          <p>
          <div class="post-metadata">${author}</div>
          <div class="post-metadata">${date}</div>
        </p>
        <p>
            ${description}
        </p>
    </div>  
  </a>
</div>`;
}
