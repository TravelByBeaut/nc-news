import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { useParams } from "react-router-dom";
import ArticleMap from "./ArticleMap";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    fetchArticles({ topic })
      .then(({ article }) => {
        setArticles(article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic]);

  return (
    <>
      <section id="trending-titles">
        <h1>TRENDING TITLES</h1>
      </section>
      <ArticleMap articles={articles} />
    </>
  );
}
