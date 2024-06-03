import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
function PostList() {
  const posts = useAppSelector((state) => state.posts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article className="post" key={post.id}>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.userId} /> <span>{post.date}</span>
      <p className="post-content">{post.content?.substring(0, 100)}</p>
      <ReactionButtons post={post} />
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
