import { Link } from "react-router-dom";
import ArticleSnippet from "./ArticleSnippet";

export default function ArticleMap({ articles }) {
  return articles.map((article) => {
    return (
      <li key={article.article_id}>
        <Link to={`/article/${article.article_id}`} className="article-link">
          <ArticleSnippet article={article} />
        </Link>
      </li>
    );
  });
}
