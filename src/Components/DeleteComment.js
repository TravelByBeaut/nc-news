import { deleteComment } from "../api";

export default function DeleteComment({ comment, setDeletedIndex, index }) {
  const handleDelete = (event) => {
    comment.comment_id = event.target.value;
    setDeletedIndex(index);
    deleteComment(comment.comment_id)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  if (comment.author === "tickle122") {
    return (
      <button
        className="delete-button"
        onClick={handleDelete}
        value={comment.comment_id}
      >
        Delete
      </button>
    );
  }
}
