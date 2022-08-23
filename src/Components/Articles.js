import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { useParams } from "react-router-dom";
import ArticleMap from "./ArticleMap";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticles({ topic })
      .then(({ article }) => {
        setArticles(article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic]);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      {/* <section id="trending-titles">
        <h1>TRENDING TITLES</h1>
      </section> */}
      <ul className="article-list">
        <ArticleMap articles={articles} />
      </ul>
    </>
  );
}
