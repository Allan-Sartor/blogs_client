import React from "react";
import { ContainerItem } from "./styles";

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
      <div>
          <h5>Nota</h5>
          <p>{score}</p>
      </div>
    </ContainerItem>
  );
};
