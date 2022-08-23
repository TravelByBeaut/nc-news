import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { useParams, Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    fetchArticles({ topic })
      .then(({ article }) => {
        setArticles(article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic]);

  return (
    <>
      <section id="trending-titles">
        <h1>TRENDING TITLES</h1>
      </section>
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <Link
              to={`/articles/${article.article_id}`}
              className="article-link"
              key={article.article_id}
            >
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
            </Link>
          );
        })}
      </ul>
    </>
  );
}
