import React from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

import { api } from "../../../services/api";

import { Button } from "../../Button/index"

import { ContainerForm } from "./styles";

const schema = yup.object({
  title: yup.string().min(10, "O titulo deve conter no minino 10 caracteres").required("O titulo é obrigatório"),
  body: yup.string().min(20, "A descrição pode ter no min 20 caracteres").required("A descrição é obrigatória")
}).required();

export default function ArticleCreateForm() {
  const navigate = useNavigate();
  const { 
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: '',
      body: '',
    },
    resolver: yupResolver(schema)
  },
  );

  // Create new Article
  async function handleCreateNewArticle(data) {
    let dataArticle = await data

    api.post("articles", dataArticle)
      .then((r) => {
        alert('Seu artigo foi publicado!', r.data)
        navigate('/')
      })
      .catch(err => {
        alert('Não foi possível publicar seu artigo!', err)
      })
  }

  function handleRedirectList() {
    navigate('/')
  }

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(handleCreateNewArticle)}>

        <h1>Cadastre um novo artigo</h1>

        <input placeholder="Titulo" {...register("title")} />
        <span>{errors.title?.message}</span>

        <textarea placeholder="Descrição"{...register("body")} />
        <span>{errors.body?.message}</span>

        <div>
          <Button onClick={handleRedirectList} style="btn-return" name="Voltar" />
          <Button type="submit" style="btn-success" name="Cadastrar" />
        </div>
      </form>
    </ContainerForm>
  );
}