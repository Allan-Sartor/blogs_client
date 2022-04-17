import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { api } from "../../../services/api";

import { ArticleInfo } from "./ArticleInfo";
import { ReviewForm } from "./ReviewForm";
import { ReviewItem } from "./ReviewItem";

import { Container, Context } from "./styles";

export const ArticleView = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isDeletedArticle, setIsDeletedArticle] = useState(false);
  const [slugInfo, setSlugInfo] = useState('');

  // Get data for article
  useEffect(() => {
    const url = `articles/${slug}`;

    api.get(url).then((response) => {
      setArticle(response.data);
      setLoaded(true);
    });
  }, [isCreated || isDeletedArticle]);

  // Seting data for New Review
  const handleChange = (e) => {
    e.preventDefault();

    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
    // console.log('Seting data for New Article:', review)
  };

  // Create new Review for article
  const handleCreateNewArticleReview = async (e) => {
    e.preventDefault();

    const article_id = article.data.id;

    await api.post("reviews/", { review, article_id }).then((response) => {
      const included = [...article.included, response.data.data];
      setArticle({ ...article, included });
      setReview({ title: "", description: "", score: 0 });
      setIsCreated(true);
      alert("Analise publicada com sucesso!");
    });
  };

  // Delete article and reviews
  const handleDeleteArticle = async (slugInfo) => {
    console.log('setSlug', slugInfo)
    await api.delete("articles/", slugInfo)
    setIsDeletedArticle(true);
    alert('Seu artigo foi deletado!')
  }


  // Seting score for Review
  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };

  // Listing reviews for article
  let reviews

  if (loaded && article.included) {
    reviews = article.included.map((item, index) => {
      console.log('review', reviews)
      return (
        <ReviewItem key={index} attributes={item.attributes} />)
    });
  }

  return (
    <>
      <Container>
        {loaded && (
          <Context>
            <Link to={'/'}>
              <button
              // onClick={() => {
              //   setSlugInfo(article.data.attributes.slug)
              //   handleDeleteArticle(slugInfo)
              // }}
              >
                Voltar
              </button>
            </Link>
            <ArticleInfo
              attributes={article.data.attributes}
              reviews={article.included}
            />
            <div className="review styles-box">
              <h1>Deixe sua avaliação</h1>
              <ReviewForm
                handleChange={handleChange}
                handleCreateNewArticleReview={handleCreateNewArticleReview}
                setRating={setRating}
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