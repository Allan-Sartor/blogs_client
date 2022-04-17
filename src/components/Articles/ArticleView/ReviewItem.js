import React from "react";
import { Rating } from "../../Rating/Rating";
import { ContainerItem, RatingContainer } from "./styles";

export const ReviewItem = (props) => {
  const { title, description, score } = props.attributes;

  return (
    <ContainerItem>
      <h4>Titulo: {title}</h4>
      <div>
        <p>
          <b>Descrição:</b> {description}
        </p>
      </div>
      <RatingContainer>
        <Rating score={score} /> 
      </RatingContainer>
    </ContainerItem>
  );
};
