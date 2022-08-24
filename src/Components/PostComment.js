import { useId, useState } from "react";
import { useParams } from "react-router-dom";
import { sendComment } from "../api";

export default function PostComment({ comments, setComments }) {
  const [comment, setComment] = useState({ author: "tickle122" });
  const id = useId;
  const { article_id } = useParams();

  const handleBody = (event) =>
    setComment((currComment) => {
      const commentCopy = { ...currComment };
      commentCopy.body = event.target.value;
      return commentCopy;
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    setComments((currComment) => {
      const commentCopy = [...currComment];
      comment.created_at = "Just Now";
      comment.comment_id = id;
      commentCopy.unshift(comment);
      return commentCopy;
    });
    sendComment(article_id, comment.author, comment.body)
      .then(() => {
        event.target.reset();
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="description"
          value={comment.body}
          onChange={handleBody}
          required="required"
        />{" "}
        <button id="votes" type="submit">
          Post Comment
        </button>
      </form>
    </div>
  );
}
