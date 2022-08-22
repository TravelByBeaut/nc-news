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

  const handleTopic = (event) => {
    setTopics(event.target.value);
  };

  return (
    <>
      <section className="topic-section">
        {topics.map((item) => {
          return (
            <Link to={`/topics/${item.slug}`}>
              <button
                className="topic-buttons"
                key={item.slug}
                onClick={handleTopic}
                value={item.slug}
              >
                {item.slug}
              </button>
            </Link>
          );
        })}
      </section>
    </>
  );
}
