import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

export default function ArticleMap({ articles }) {
  return articles.map((article) => {
    return (
      <Link
        to={`/articles/${article.article_id}`}
        className="article-link"
        key={article.article_id}
      >
        <ArticleCard article={article} />
      </Link>
    );
  });
}