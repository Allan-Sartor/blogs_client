import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { api } from "../../../services/api";

import { Button } from "../../Button/index"

import { ContainerForm } from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ArticleCreateForm() {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  const { register, handleSubmit } = useForm()
  const [ article, setArticle ] = useState({})
  const [ loaded, setLoaded ] = useState(false)

  useEffect(() => {
    getArticleInfo()
  }, [])

  // // Get data for article
  function getArticleInfo() {
    api.get(`articles/${slug}`)
      .then((response) => {
        setArticle(response.data.data)
        setLoaded(true)
      })
      .catch((err) => alert('Não foi possivel encontrar as informações de seu artigo!', err))
  }

  // Update Article
  function handleUpdateArticle(data) {
    api.put(`articles/${slug}`, data)
      .then((r) => {
        alert('Dados atualizados com sucesso', r.data)
        navigate('/')
      })
      .catch(err => {
        console.log('Erro ao atualizar seu artigo!', err)
      })
  }

  return (
    <>
      {loaded ?
        (<ContainerForm>
          <form onSubmit={handleSubmit(handleUpdateArticle)}>
            <h1>Editar: {article.attributes.title}</h1>

            <input defaultValue={article.attributes.title} {...register("title")} />

            <textarea defaultValue={article.attributes.body} {...register("body")} />

            <div>
              <Link to={'/'}>
                <Button style="btn-return" name="Voltar" />
              </Link>
              <Button type="submit" style="btn-success" name="Atualizar" />
            </div>
          </form>
        </ContainerForm>
        ) :
        <span>
          Não foi possivel carregar as informações do formulario de edição!
        </span>
      }
    </>
  );
}