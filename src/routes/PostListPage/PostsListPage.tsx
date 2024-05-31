import AddPostForm from "./AddPostForm";
import PostList from "./PostList";
import "../../features/posts/Post.css";

function PostListPage() {
  return (
    <>
      <PostList />
      <AddPostForm />
    </>
  );
}

export default PostListPage;
