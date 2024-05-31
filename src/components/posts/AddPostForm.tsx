import { ChangeEventHandler, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { postAdded } from "../../features/posts/postsSlice";
import { nanoid } from "@reduxjs/toolkit";

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();

  const onTitleChanged: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.target.value);
  const onContentChanged: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
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
        <button type="button" onClick={onSavePostClicked}>
          Add Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
