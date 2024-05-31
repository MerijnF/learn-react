import AddPostForm from "../../components/posts/AddPostForm";
import PostList from "../../components/posts/PostList";
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
