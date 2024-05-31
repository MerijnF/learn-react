import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
function PostList() {
  const posts = useAppSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article className="post" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content?.substring(0, 100)}</p>
      <Link to={`/post/${post.id}`}>Read More</Link>
    </article>
  ));

  return (
    <section className="post-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostList;
