import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { sendComment } from "../api";

export default function PostComment({ comments, setComments }) {
  const [comment, setComment] = useState({});
  const navigate = useNavigate();
  const { article_id } = useParams();

  const handleAuthor = (event) =>
    setComment((currComment) => {
      const commentCopy = { ...currComment };
      commentCopy.author = event.target.value;
      return commentCopy;
    });
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
      commentCopy.unshift(comment);
      return commentCopy;
    });
    sendComment(article_id, comment.author, comment.body)
      .then(() => {
        // window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="list-items">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="author"
          value={comments.author}
          onChange={handleAuthor}
          required="required"
        />{" "}
        <input
          placeholder="description"
          value={comments.body}
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
