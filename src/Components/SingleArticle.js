import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById, fetchCommentsById } from "../api";
import ArticleCard from "./ArticleCard";
import Comments from "./Comments";
import Votes from "./Votes";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then(({ article }) => {
      setArticle(article[0]);
    });
  }, [article_id]);

  useEffect(() => {
    fetchCommentsById(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [article_id]);

  return (
    <>
      <section>
        <ArticleCard article={article} />
        <Votes article={article} />
      </section>
      <Comments comments={comments} />
    </>
  );
}
