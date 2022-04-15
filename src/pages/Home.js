import React, { Component, useState } from "react";
import { Articles } from "../components/Articles/Articles";
import { Header } from "../components/Header/Header";
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  async loadArticles() {
    let response = await fetch(`http://localhost:3001/api/v1/articles`);
    const articles = await response.json();
    this.setState({ articles: articles.data });
    console.log('article home', articles.data);
  }

  componentDidMount() {
    this.loadArticles();
  };

  render() {
    return (
      <>
        <Header />
        <Articles loadArticles={this.state.articles} />
      </>
    )
  }

}

export default Home;