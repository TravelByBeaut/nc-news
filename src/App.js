import "./App.css";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Topics from "./Components/Topics";
import { Route, Routes } from "react-router-dom";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/topics" element={<Topics />}></Route>
        <Route path="/topics/:topic" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
      </Routes>
    </div>
  );
}

export default App;
