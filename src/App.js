import { useEffect, useState } from "react";
import { fetchTopics, fetchArticles } from "./api";
import "./App.css";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Topics from "./Components/Topics";
import { Route, Routes } from "react-router-dom";
import SingleTopic from "./Components/SingleTopic";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then(({ data }) => {
        setArticles(data.article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Articles articles={articles} />}></Route>
        <Route path="/topics" element={<Topics />}></Route>
        <Route
          path="/topics/:topic"
          element={
            <SingleTopic articles={articles} setArticles={setArticles} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
