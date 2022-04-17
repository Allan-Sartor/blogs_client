import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { api } from "../../../services/api";

import { Button } from "../../../components/Button/index"

import { ContainerForm } from "./styles";
import { Link } from "react-router-dom";

export default function ArticleCreateForm() {
  const { resetField, register, handleSubmit, watch, formState: { errors } } = useForm();
  const [article, setArticle] = useState({});

  // Watch captar eventos dos inputs
  // console.log(watch("title"));
  // console.log(watch("body"));

  const handleCreateNewArticle = async (data) => {
    setArticle(data);

    await api.post("articles", article)
      .then((response) => setArticle(response.data))

    alert('Seu artigo foi publicado!')
    resetField("title")
    resetField("body")
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