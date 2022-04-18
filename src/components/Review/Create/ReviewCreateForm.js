import React from "react";
import { Form, RatingBox, RatingContent } from "./styles";
import { Button } from '../../../../Button'

export function ReviewCreateForm(props) {
  
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <>
        <input
          type="radio"
          key={index}
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
    <Form onSubmit={props.handleCreateNewArticleReview}>
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
      <Button type="submit" style="btn-success" name="Enviar avalição" />
    </Form>
  );
};
