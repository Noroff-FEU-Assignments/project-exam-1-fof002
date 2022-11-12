export const simPlePost = [
  post.excerpt.rendered,
  post.title.rendered,
  post.id,
  post._embedded["wp:featuredmedia"]["0"].source_url,
  post._embedded["author"]["0"].name,
  post.date,
];
