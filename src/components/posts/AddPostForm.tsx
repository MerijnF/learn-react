import { ChangeEventHandler, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { postAdded } from "../../features/posts/postsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useAppDispatch();

  const users = useAppSelector((state: RootState) => state.users);

  const onTitleChanged: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.target.value);
  const onContentChanged: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setContent(e.target.value);
  const onAuthorChanged: ChangeEventHandler<HTMLSelectElement> = (e) =>
    setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };
  const canSave = [title, content, userId].every(Boolean);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Add Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
