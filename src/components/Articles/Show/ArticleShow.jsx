import React, { useContext } from "react";

import { ArticleInfo } from "./ArticleInfo";
import { ReviewForm } from "./ReviewForm";
import { ReviewItem } from "./ReviewItem";

import { ArticleContext } from "../../../contexts/ArticleContext";

import { Container, Context } from "./styles";

export function ArticleShow() {
  const { article, loaded } = useContext(ArticleContext) 

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
        { loaded ? (
          <Context>
            <ArticleInfo />
            
            <div className="styles-box">
              <h1>Deixe sua avaliação</h1>
              <ReviewForm />
            </div>

            <div className="styles-box">
              <h1>Avaliações</h1>
              {reviews}
            </div>
          </Context>
        ) : <span>Sem informações</span>}
      </Container>
    </>
  )
}
