import React, { useEffect, useState } from 'react';
import { FaEye, FaRegEdit, FaTrash } from 'react-icons/fa'
import { api } from '../../../services/api';

import { Link } from 'react-router-dom';

import { Rating } from '../../Rating/Rating';
import { ActionBox, ArticleBox, ArticleInfo, ButtonBox, Container, Footer, Score } from './styles';

export function ArticleList() {
  const [articles, setArticles] = useState([])

  // Get data for articles
  useEffect(() => {
    async function getListArticles() {
      await api.get('articles')
        .then((response) => setArticles(response.data.data))
        .catch((err) =>
          alert('Não foi possivel listar todos os artigos! Servidor OFF', err)
        )
    }
    getListArticles()
  }, []);

  return (
    <Container>
      {articles.map((i) => (
        <ArticleBox key={i.id}>

          <ArticleInfo>
            <h1>{i.attributes.title}</h1>
            <p>
              {i.attributes.body}
            </p>
          </ArticleInfo>

          <ActionBox>
            <ButtonBox>
              <Link to={`/articles/${i.attributes.slug}`}>
                <span data-tooltip="Visualizar artigo">
                  <FaEye size={23} color="#363f5f" />
                </span>
              </Link>

              <Link to={`/edit-article/${i.attributes.slug}`}>
                <span data-tooltip="Editar artigo">
                  <FaRegEdit size={21} color="#363f5f" />
                </span>
              </Link>

              <Link to={`/edit-article/${i.attributes.slug}`}>
                <span data-tooltip="Deletar artigo">
                  <FaTrash size={21} color="#363f5f" />
                </span>
              </Link>
            </ButtonBox>

            <Score>
              <p>Média de avalições:</p>
              <Rating score={i.attributes.avg_score.toFixed(1)} />
            </Score>

            <Footer>
              <span>
                <p>Criado em:</p>
                {
                  new Intl.DateTimeFormat("pt-br")
                    .format(new Date(i.attributes.created_at))
                }
              </span>
            </Footer>
          </ActionBox>
        </ArticleBox>
      ))}
    </Container>
  )
}
