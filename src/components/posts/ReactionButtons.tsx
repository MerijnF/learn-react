import { useAppDispatch } from "../../app/hooks";
import {
  type Post,
  Reaction,
  reactionAdded,
} from "../../features/posts/postsSlice";

const reactionEmoji: { [key in Reaction]: string } = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

function ReactionButtons({ post }: { post: Post }) {
  const dispatch = useAppDispatch();

  const reactionButtons = (
    Object.entries(reactionEmoji) as [Reaction, string][]
  ).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
}

export default ReactionButtons;
