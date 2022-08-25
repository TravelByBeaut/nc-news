import { useParams } from "react-router-dom";
import { sendComment } from "../api";

export default function PostComment({ comment, setComment, setComments }) {
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
      commentCopy.unshift(comment);
      return commentCopy;
    });
    sendComment(article_id, comment.author, comment.body)
      .then(() => {
        const textarea = document.querySelector("textarea");
        textarea.value = "";
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
        />
        <button id="votes" type="submit">
          Post Comment
        </button>
      </form>
    </div>
  );
}
