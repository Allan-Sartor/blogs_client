import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { api } from "../../../services/api";

import { Button } from "../../../components/Button/index"

import { ContainerForm } from "./styles";
import { Link } from "react-router-dom";

export default function ArticleCreateForm() {
  const { resetField, register, handleSubmit, formState: { errors } } = useForm();
  const [ article, setArticle ] = useState({});
  const [ isCreatedArticle, setCreatedArticle ] = useState(false);

  // Create new Article
  function handleCreateNewArticle(data) {
    setArticle(data);

    if (article) {
      api.post("articles", article)
        .then((r) => {
          console.log('Cadastrado', r.data);
          setCreatedArticle(true)
        })
        .catch(err => {console.log('Erro ao inserir dados', err)})
    }

    if (isCreatedArticle === true) {
      alert('Seu artigo foi publicado!')
      resetField("title")
      resetField("body")
    } else {
      alert('Não foi possível publicar seu artigo!')
    }
  }

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(handleCreateNewArticle)}>
        <h1>Cadastre um novo artigo</h1>

        <input placeholder="Titulo" {...register("title", { required: true })} />
        {errors.title?.type === 'required' && <span>Este campo é obrigatório</span>}

        <textarea placeholder="Descrição"{...register("body", { required: true })} />
        {errors.body && <span>Este campo é obrigatório</span>}

        <div>
          <Link to={'/'}>
            <Button style="btn-return" name="Voltar" />
          </Link>
          <Button type="submit" style="btn-success" name="Cadastrar" />
        </div>
      </form>
    </ContainerForm>
  );
}