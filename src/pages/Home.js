import React from "react";
import { Header } from "../components/Header/Header";
import { ArticleList } from "../components/Articles/ArticleList/ArticleList";

export default function Home() {
  return (
    <>
      <Header />
      <ArticleList />
    </>
  )
}