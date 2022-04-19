import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ArticleBox, Body, Container, Footer, Score } from './styles';

import { Rating } from '../../Rating/Rating';
import { api } from '../../../services/api';

export function ArticleList() {
  const [ articles, setArticles ] = useState([])

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
      { articles.map((i) => (
          <ArticleBox key={i.id}>
            <div>
              <h1>{i.attributes.title}</h1>
              <Body>
                {i.attributes.body}
              </Body>
            </div>
            <Score>
              <Rating score={i.attributes.avg_score.toFixed(1)} />
            </Score>
            <Footer>
              Data de criação:
              {new Intl.DateTimeFormat("pt-br").format(
                new Date(i.attributes.created_at)
              )}
            </Footer>
            <Link to={`/articles/${i.attributes.slug}`}>Leia mais</Link>
            <Link to={`/edit-article/${i.attributes.slug}`}>Editar artigo</Link>
          </ArticleBox>
      ))}
    </Container>
  )
}
