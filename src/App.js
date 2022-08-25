import "./App.css";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Topics from "./Components/Topics";
import { Route, Routes } from "react-router-dom";
import SingleArticle from "./Components/SingleArticle";
import User from "./Components/User";
import Errors from "./Components/Errors";
import { errContext, isErrorContext } from "./Components/Errors";
import { useState } from "react";

function App() {
  const [errObj, setErrObj] = useState(null);
  const [isError, setIsError] = useState(false);
  return (
    <errContext.Provider value={{ errObj, setErrObj }}>
      <isErrorContext.Provider value={{ isError, setIsError }}>
        <div className="App">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/articles/:topic" element={<Articles />} />
            <Route path="/article/:article_id" element={<SingleArticle />} />
            <Route path="/user" element={<User />} />
            <Route path="/*" element={<Errors />} />
          </Routes>
        </div>
      </isErrorContext.Provider>
    </errContext.Provider>
  );
}

export default App;
