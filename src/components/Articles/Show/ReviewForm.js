import React from "react";
import { Form, RatingBox, RatingContent } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../Button";

export function ReviewForm(props) {
  const ratingOptions = [5, 4, 3, 2, 1].map((score) => {
    return (
      <>
        <input
          id={`rating-${score}`}
          type="radio"
          name="rating"
          value={score}
          checked={props.review.score === score}
          onChange={() => console.log("selected", score)}
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
        <div>
          <Button type="submit" style="btn-success" name="Enviar avalição" />
          <Link to={'/'}>
            <Button style="btn-return" name="Voltar" />
          </Link>
        </div>
    </Form>
  );
};
