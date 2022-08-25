import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

export default function ArticleMap({ articles }) {
  return articles.map((article) => {
    return (
      <li key={article.article_id}>
        <Link to={`/article/${article.article_id}`} className="article-link">
          <ArticleCard article={article} />
        </Link>
      </li>
    );
  });
}
