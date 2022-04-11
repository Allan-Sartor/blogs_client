import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { Header } from "../Header/Header";
import { ArticleInfo } from "./ArticleInfo";
import { ReviewForm } from "./ReviewForm";
import { ReviewItem } from "./ReviewItem";

import { Container, Context } from "./styles";

export const Article = (props) => {
  const { slug } = useParams();

  const [article, setArticle] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  // Get our airline id
  useEffect(() => {
    const url = `/articles/${slug}`;

    api.get(url).then((response) => {
      setArticle(response.data);
      setLoaded(true);
    });
  }, [loaded]);

  const handleChange = (e) => {
    e.preventDefault();

    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));

    // console.log('review:', review)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const article_id = article.data.id;

    api.post("reviews/", { review, article_id }).then((response) => {
      const included = [...article.included, response.data.data];
      setArticle({ ...article, included });
      setReview({ title: "", description: "", score: 0 });
      alert("Analise publicada com sucesso!");
    });
  };

  // set Score
  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };

  let reviews

  if (loaded && article.included) {
    reviews = article.included.map((item, index) => {
      return (
      <ReviewItem key={index} attributes={item.attributes} />)
    });
  }

  return (
    <>
      <Header />
      <Container>
        {loaded && (
          <Context>
            <ArticleInfo
              attributes={article.data.attributes}
              reviews={article.included}
            />
            <div className="review styles-box">
              <h1>Deixe sua avaliação</h1>
              <ReviewForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                setRating={setRating}
                attributes={article.data.attributes}
                review={review}
              />
            </div>
            <div className="evaluations styles-box">
              <h1>Avaliações</h1>
              {reviews}
            </div>
          </Context>
        )}
      </Container>
    </>
  );
};
