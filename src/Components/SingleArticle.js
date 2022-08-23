import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";
import ArticleCard from "./ArticleCard";
import Votes from "./Votes";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then(({ article }) => {
      setArticle(article[0]);
    });
  }, [article_id]);

  return (
    <>
      <ArticleCard article={article} />
      <Votes article={article} />
    </>
  );
}
