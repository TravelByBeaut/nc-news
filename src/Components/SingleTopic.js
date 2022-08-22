import { useEffect } from "react";
import { fetchArticlesByTopic } from "../api";
import { useParams } from "react-router-dom";

export default function SingleTopic({ articles, setArticles }) {
  const { topic } = useParams();
  useEffect(() => {
    fetchArticlesByTopic(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <ul className="article-list">
      {articles.map((article) => {
        return (
          <li key={article.article_id} className="article-list-item">
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
  );
}
