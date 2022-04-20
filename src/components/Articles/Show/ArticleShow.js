import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { api } from "../../../services/api";

import { Container, Context } from "./styles";
import { ArticleInfo } from "./ArticleInfo";
import { ReviewForm } from "./ReviewForm";
import { ReviewItem } from "./ReviewItem";

export function ArticleShow() {
  const { slug } = useParams();
  const [article, setArticle] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [isCreatedReview, setIsCreatedReview] = useState(false);

  // // Get data for article
  useEffect(() => {
    async function getArticle() {
      let slugURL = slug
      await api.get(`articles/${slugURL}`)
        .then((response) => {
          setArticle(response.data);
          setIsCreatedReview(false);
          setLoaded(true);
        })
        .catch((err) => alert('Não foi possivel encontrar as informações de seu artigo!', err))
    }
    getArticle()
  }, [isCreatedReview]);

  // Seting data for New Review
  // console.log('Seting data for New Article:', review)
  const handleChange = (e) => {
    e.preventDefault();
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
  };

  // Create new Review for article
  async function handleCreateNewArticleReview(e) {
    e.preventDefault();
    const article_id = article.data.id;

    await api.post("reviews/", { review, article_id })
      .then((response) => {
        const included = [...article.included, response.data.data];
        setArticle({ ...article, included });
        setIsCreatedReview(true)
        setReview({ title: "", description: "", score: 0 });
        alert("Analise publicada com sucesso!");
        
      })
      .catch(err => {
        alert("Analise não publicada!");
        console.log(err);
      })
    }


  // Seting score for Review
  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };

  // Listing reviews for article
  let reviews

  if (loaded && article.included) {
    if (article.included.length > 0) {
      reviews = article.included.map((item) => {
        return (
          <ReviewItem key={item.id} attributes={item.attributes} />
        )
      })
    } else {
      reviews = <span>Esse artigo não possui avaliações ainda...</span>
    }
  }

  return (
    <>
      <Container>
        {loaded ? (
          <Context>

            <ArticleInfo
              attributes={article.data.attributes}
              reviews={article.included}
            />

            <div className="styles-box">
              <h1>Deixe sua avaliação</h1>
              <ReviewForm
                handleChange={handleChange}
                handleCreateNewArticleReview={handleCreateNewArticleReview}
                setRating={setRating}
                review={review}
              />
            </div>

            <div className="styles-box">
              <h1>Avaliações</h1>
              {reviews}
            </div>
          </Context>
        ): <span>Sem informações</span>}
      </Container>
    </>
  )
}
