import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById, fetchCommentsById } from "../api";
import ArticleCard from "./ArticleCard";
import Comments from "./Comments";
import Errors, { errContext, isErrorContext } from "./Errors";
import Votes from "./Votes";
import { useContext } from "react";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const { setErrObj } = useContext(errContext);
  const { isError, setIsError } = useContext(isErrorContext);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id)
      .then(({ article }) => {
        setArticle(article[0]);
      })
      .catch((err) => {
        setIsError(true);
        setErrObj(err);
      });
  }, [article_id, setErrObj, setIsError]);

  useEffect(() => {
    fetchCommentsById(article_id)
      .then(({ comments }) => {
        setComments(comments);
      })
      .catch((err) => {
        setIsError(true);
        setErrObj(err);
      });
  }, [article_id, setErrObj, setIsError]);

  return (
    <>
      {isError ? (
        <Errors />
      ) : (
        <>
          <section className="single-article-section">
            <ArticleCard article={article} />
            <Votes article={article} />
          </section>
          <Comments comments={comments} setComments={setComments} />
        </>
      )}
    </>
  );
}
