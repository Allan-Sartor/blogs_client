import React, { useContext } from "react";
import { Rating } from "../../Rating/Rating";
import { ArticleView, RatingContentInfo, ReviewCount } from "./styles";

import { ArticleContext } from "../../../contexts/ArticleContext"

export const ArticleInfo = () => {
  const { article } = useContext(ArticleContext)
  const total = article.included.length

  return (
    <div className="styles-box">
      <ArticleView>
        <div>
          <h1> {article.data.attributes.title} </h1>
        </div>
        <hr size="6" />
        <div>
          <p> {article.data.attributes.body} </p>
        </div>
      </ArticleView>
      <RatingContentInfo>
        <hr size="5" />
        <ReviewCount>
          <p> {total} Análises de usuários </p>
        </ReviewCount>
        <p>Média de avalições:</p>
        <Rating score={article.data.attributes.avg_score} />
      </RatingContentInfo>
    </div >
  )
}