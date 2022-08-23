import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then(({ article }) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <section>
      <ul className="single-article">
        <li className="article-list-item" key={article[0].article_id}>
          <section>
            <h1 id="article-title">{article[0].title}</h1>
          </section>
          <section>
            <h2 id="article-author">{article[0].author}</h2>
          </section>
          <section>{article[0].body}</section>
          <br />
          <section>{article[0].created_at}</section>
          <br />
          <section>Votes: {article[0].votes}</section>
          <br />
        </li>
      </ul>
    </section>
  );
}
