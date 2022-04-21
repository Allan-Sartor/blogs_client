import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { api } from "../../../services/api";

import { Button } from "../../../components/Button/index"

import { ContainerForm } from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ArticleCreateForm() {
  const { slug } = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [ article, setArticle ] = useState({})
  const [ articleNew, setArticleNew ] = useState({})
  const [ loaded, setLoaded ] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    getArticleInfo()
  }, [])

  // // Get data for article
  async function getArticleInfo() {
    await api.get(`articles/${slug}`)
      .then((response) => {
        setArticle(response.data.data)
        setLoaded(true)
      })
      .catch((err) => alert('Não foi possivel encontrar as informações de seu artigo!', err))
  }

  // Update Article
  const handleUpdateArticle = async (data) => {
    await setArticleNew(data)
    console.log('ArticleNew', articleNew)
    console.log('slug', slug)

    api.patch(`articles/${slug}`, articleNew)
      .then((r) => {
        console.log('Dados atualizados com sucesso', r.data)
        getArticleInfo()
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