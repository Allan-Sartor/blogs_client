import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ShowArticle from "./pages/ShowArticle";
import CreateArticle from "./pages/CreateArticle";

import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/articles/:slug" element={<ShowArticle />} />
        <Route path="/create-article" element={<CreateArticle />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
};

export default App;
