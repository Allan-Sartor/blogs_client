import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ActionBox, ArticleBox, ArticleInfo, ButtonBox, Container, Footer, Score } from './styles';

import { Rating } from '../../Rating/Rating';

import { api } from '../../../services/api';

import { FaEye, FaRegEdit } from 'react-icons/fa'

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
                <FaEye size={24} color="rgba(0, 0, 0, 8.6)" />
              </Link>
              <Link to={`/edit-article/${i.attributes.slug}`}>
                <FaRegEdit size={24} color="rgba(0, 0, 0, 8.6)"/>
              </Link>
              
            </ButtonBox>

            <Footer>
              <span>
                <p>Criado em:</p>
                {
                  new Intl.DateTimeFormat("pt-br")
                    .format(new Date(i.attributes.created_at))
                }
              </span>
            </Footer>

            <Score>
              <p>Média de avalições:</p>
              <Rating score={i.attributes.avg_score.toFixed(1)} />
            </Score>
          </ActionBox>
        </ArticleBox>
      ))}
    </Container>
  )
}
