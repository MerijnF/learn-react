import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { postUpdated, selectPost } from "../../features/posts/postsSlice";
import { ChangeEventHandler, useState } from "react";
import { useAppDispatch } from "../../app/hooks";

export function EditPostPage() {
  const { postId } = useParams();
  const post = useSelector(selectPost(postId));

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onTitleChanged: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.target.value);
  const onContentChanged: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content && postId) {
      dispatch(postUpdated({ id: postId, title, content }));
      navigate(`/post/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save
      </button>
    </section>
  );
}
