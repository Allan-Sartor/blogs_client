import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ArticleBox, Container, Footer, Score } from './styles';

import { Rating } from '../Rating/Rating';

export const Articles = () => {
  const [ articles, setArticles ] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:3001/api/v1/articles");
      response = await response.json();
      setArticles(response.data);
      console.log(response);
    }

    fetchMyAPI()
  }, []);

  return (
    <Container>
      {articles.map((i) => (
          <ArticleBox key={i.attributes.id}>
            <div>
              <h1>{i.attributes.title}</h1>
              <p>{i.attributes.body}</p>
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
          </ArticleBox>
      ))}
    </Container>
  )
}
