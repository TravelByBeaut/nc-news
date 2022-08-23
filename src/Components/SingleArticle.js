import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then(({ article }) => {
      setArticle(article[0]);
    });
  }, [article_id]);

  return (
    <section>
      <ul className="single-article">
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
      </ul>
    </section>
  );
}
