import PostComment from "./PostComment";
import { useState } from "react";
import DeleteComment from "./DeleteComment";

export default function Comments({ comments, setComments }) {
  const [comment, setComment] = useState({ author: "tickle122" });
  const [deletedIndex, setDeletedIndex] = useState(null);
  return (
    <section className="comments-section">
      <br />
      <ul>
        <PostComment
          comment={comment}
          setComment={setComment}
          setComments={setComments}
        />
        {comments.map((comment, index) => {
          return (
            <section
              key={index}
              className={`comments-section--item ${
                index === deletedIndex && deletedIndex
                  ? "comments-section--item__deleted"
                  : ""
              }`}
            >
              <li id="comment-author">{comment.author}</li>
              <br />
              <li>{comment.created_at}</li>
              <br />
              <li>{comment.body}</li>
              <DeleteComment
                comment={comment}
                setDeletedIndex={setDeletedIndex}
                index={index}
              />
            </section>
          );
        })}
      </ul>
    </section>
  );
}
