import PostComment from "./PostComment";

export default function Comments({ comments, setComments }) {
  return (
    <section className="comments-section">
      <br />
      <ul>
        <PostComment comments={comments} setComments={setComments} />
        {comments.map((comment, index) => {
          return (
            <section key={index} className="comments-section--item">
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
