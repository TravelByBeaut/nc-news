import "./App.css";
import Articles from "./Components/Articles";
import { useEffect, useState } from "react";
import { fetchArticles } from "./api";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Articles />
    </div>
  );
}

export default App;
