import { useState, useEffect } from "react";
import { fetchTopics } from "../api";
import { Link } from "react-router-dom";
import Errors, { errContext, isErrorContext } from "./Errors";
import { useContext } from "react";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const { setErrObj } = useContext(errContext);
  const { isError, setIsError } = useContext(isErrorContext);

  useEffect(() => {
    fetchTopics()
      .then(({ data }) => {
        setTopics(data.data);
      })
      .catch((err) => {
        setIsError(true);
        setErrObj(err);
      });
  }, [setErrObj, setIsError]);

  return (
    <>
      {isError ? (
        <Errors />
      ) : (
        <>
          <section className="topic-section">
            {topics.map((item) => {
              return (
                <Link
                  to={`/articles/${item.slug}`}
                  key={item.slug}
                  id="topic-link"
                >
                  <button className="topic-buttons">{item.slug}</button>
                </Link>
              );
            })}
          </section>
        </>
      )}
    </>
  );
}
