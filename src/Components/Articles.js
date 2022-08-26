import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { useParams } from "react-router-dom";
import ArticleMap from "./ArticleMap";
import Queries from "./Queries";
import { useContext } from "react";
import Errors, { errContext, isErrorContext } from "./Errors";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort_by, setSort_by] = useState("created_at");
  const [order_by, setOrder_by] = useState("desc");
  const { setErrObj } = useContext(errContext);
  const { isError, setIsError } = useContext(isErrorContext);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticles({ topic, sort_by, order_by })
      .then(({ article }) => {
        setArticles(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setErrObj(err);
      });
  }, [topic, sort_by, order_by, setErrObj, setIsError]);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      {isError ? (
        <Errors />
      ) : (
        <>
          <Queries
            setSort_by={setSort_by}
            sort_by={sort_by}
            setOrder_by={setOrder_by}
            order_by={order_by}
          />
          <section id="trending-titles">
            <h1>TRENDING TITLES</h1>
          </section>
          <ul className="article-list">
            <ArticleMap articles={articles} />
          </ul>
        </>
      )}
    </>
  );
}
