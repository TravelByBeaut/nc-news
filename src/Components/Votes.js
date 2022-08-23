import { useState } from "react";
import { updateVotes } from "../api";

export default function Votes({ article }) {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  const handleVotes = (event, num) => {
    setVotes((currCount) => currCount + num);
    setErr(null);
    article.article_id = event.target.value;
    updateVotes(article.article_id, num).catch((err) => {
      setVotes((currCount) => currCount - 1);
      setErr("Something went wrong, please try again.");
    });
  };
  if (err) return <p>{err}</p>;

  return (
    <div className="votes-buttons">
      <button
        id="votes"
        onClick={(event) => {
          handleVotes(event, 1);
        }}
        value={article.article_id}
      >
        Vote Up
      </button>
      <p id="votes-text">Votes: {article.votes + votes}</p>
      <button
        id="votes"
        onClick={(event) => {
          handleVotes(event, -1);
        }}
        value={article.article_id}
      >
        Vote Down
      </button>
    </div>
  );
}
