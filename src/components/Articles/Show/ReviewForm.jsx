import React, { useContext } from "react";
import { ContainerForm, RatingBox, RatingContent } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import { ArticleContext } from "../../../contexts/ArticleContext";

export function ReviewForm() {
  const { setrating, change, handlecreate, review } = useContext(ArticleContext)

  const ratingOptions = [5, 4, 3, 2, 1].map((score) => {
    return (
      <>
        <input
          id={`rating-${score}`}
          type="radio"
          name="rating"
          value={score}
          checked={review.score === score}
          onChange={() => console.log("selected", score)}
        />
        <label onClick={setrating.bind(this, score)}></label>
      </>
    );
  });

  return (
    <ContainerForm>
      <form onSubmit={handlecreate}>
        <input
          onChange={change}
          value={review.title}
          type="text"
          name="title"
          placeholder="Titulo"
        />

        <textarea
          onChange={change}
          value={review.description}
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
      </form>
    </ContainerForm>
  );
};
