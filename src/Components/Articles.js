import { useState, useEffect } from "react";
import { fetchArticles } from "../api";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then(({ data }) => {
        setArticles(data.article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Trending Titles</h1>
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <li className="article-list-item" key={article.article_id}>
              <section>
                <h1 id="article-title">{article.title}</h1>
              </section>
              <section>
                <h2 id="article-author">{article.author}</h2>
              </section>
              <section>{article.body}</section>
              <br />
              <section>{article.created_at}</section>
              <br />
              <section>Votes: {article.votes}</section>
              <br />
            </li>
          );
        })}
      </ul>
    </>
  );
}
