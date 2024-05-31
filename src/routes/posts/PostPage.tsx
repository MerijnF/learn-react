import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../../features/posts/Post.css";
import { selectPost } from "../../features/posts/postsSlice";

export function PostPage() {
  const { postId } = useParams();

  const post = useSelector(selectPost(postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/post/${post.id}/edit`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
}
