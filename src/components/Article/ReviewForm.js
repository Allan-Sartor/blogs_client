import React from "react";
import { Form, RatingBox, RatingContent } from "./styles";

export const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score) => {
    return (
      <>
        <input
          type="radio"
          value={score}
          checked={props.review.score === score}
          name="rating"
          onChange={() => console.log("selected", score)}
          id={`rating-${score}`}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </>
    );
  });

  return (
    <Form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          value={props.review.title}
          type="text"
          name="title"
          placeholder="Titulo"
        />
        <textarea
          onChange={props.handleChange}
          value={props.review.description}
          type="text"
          name="description"
          placeholder="Descrição"
        />
        <RatingContent>
          <h5>Nota</h5>
          <RatingBox>{ratingOptions}</RatingBox>
        </RatingContent>
      <button type="submit">Enviar avalição</button>
    </Form>
  );
};
