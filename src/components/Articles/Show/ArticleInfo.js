import React from "react";
import { Rating } from "../../Rating/Rating";
import { ArticleView, RatingContentInfo, ReviewCount } from "./styles";

export const ArticleInfo = (props) => {
  const { title, body, avg_score } = props.attributes
  const total = props.reviews.length

  return (
    <div className="styles-box">
      <ArticleView>
        <div>
          <h1> {title} </h1>
        </div>
        <hr size="6" />
        <div>
          <p> {body} </p>
        </div>
      </ArticleView>
      <RatingContentInfo>
        <hr size="5" />
        <ReviewCount>
          <p> {total} Análises de usuários </p>
        </ReviewCount>
        <p>Média de avalições:</p>
        <Rating score={avg_score} />
      </RatingContentInfo>
    </div >
  )
}