import React from "react";
import { Route, Routes } from "react-router-dom";

import ListArticle from "./pages/ListArticle";
import ViewArticle from "./pages/ViewArticle";
import CreateArticle from "./pages/CreateArticle";
import EditArticle from "./pages/EditArticle";

import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ListArticle />} />
        <Route path="/articles/:slug" element={<ViewArticle />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="/edit-article/:slug" element={<EditArticle />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
};

export default App;
