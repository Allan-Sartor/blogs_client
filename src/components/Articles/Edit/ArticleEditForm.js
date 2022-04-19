import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { api } from "../../../services/api";

import { Button } from "../../../components/Button/index"

import { ContainerForm } from "./styles";
import { Link, useParams } from "react-router-dom";

export default function ArticleCreateForm() {
  const { slug } = useParams()
  const { resetField, register, handleSubmit, formState: { errors } } = useForm()
  const [article, setArticle] = useState({})
  const [articleNew, setArticleNew] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [isUpdateArticle, setIsUpdateArticle] = useState(false)

  // // Get data for article
  useEffect(() => {
    api.get(`articles/${slug}`)
      .then((response) => {
        setArticle(response.data.data)
        setLoaded(true)
      })
      .catch((err) => alert('Não foi possivel encontrar as informações de seu artigo!', err))

  }, [isUpdateArticle]);


  // Update Article
  function handleUpdateArticle(data) {
    setArticle(data);

    if (article) {
      api.put("articles", article)
        .then((r) => {
          console.log('Erro ao atulizar dados', r.data);
          setIsUpdateArticle(true)
        })
        .catch(err => { console.log('Erro ao atualizar dados', err) })
    }

    if (isUpdateArticle === true) {
      alert('Seu artigo foi Editado!')
      resetField("title")
      resetField("body")
    } else {
      alert('Não foi possível editar seu artigo!')
    }
  }

  return (
    <>
      {loaded ?
        (<ContainerForm>
          <form onSubmit={handleSubmit(handleUpdateArticle)}>
            <h1>Editar: {article.attributes.title}</h1>

            <input placeholder="Titulo" {...register("title", { required: true })} />
            {errors.title?.type === 'required' && <span>Este campo é obrigatório</span>}

            <textarea placeholder="Descrição"{...register("body", { required: true })} />
            {errors.body && <span>Este campo é obrigatório</span>}

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