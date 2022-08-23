import { useState, useEffect } from "react";
import { fetchTopics } from "../api";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then(({ data }) => {
      setTopics(data.data);
    });
  }, []);

  return (
    <>
      <section className="topic-section">
        {topics.map((item) => {
          return (
            <Link to={`/topics/${item.slug}`} key={item.slug} id="topic-link">
              <button className="topic-buttons">{item.slug}</button>
            </Link>
          );
        })}
      </section>
    </>
  );
}
