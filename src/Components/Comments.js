export default function Comments({ comments }) {
  return (
    <section className="comments-section">
      <br />
      <ul>
        {comments.map((comment) => {
          return (
            <section
              key={comment.comment_id}
              className="comments-section--item"
            >
              <li id="comment-author">{comment.author}</li>
              <br />
              <li>{comment.created_at}</li>
              <br />
              <li>{comment.body}</li>
            </section>
          );
        })}
      </ul>
    </section>
  );
}
