import React from "react";
import { Route, Routes } from "react-router-dom";
import { Article } from "./components/Article/Article";
import { Articles } from "./components/Articles/Articles";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/articles/:slug" element={<Article />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
};

export default App;
