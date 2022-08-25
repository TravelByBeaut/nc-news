import "./App.css";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Topics from "./Components/Topics";
import { Route, Routes } from "react-router-dom";
import SingleArticle from "./Components/SingleArticle";
import User from "./Components/User";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
