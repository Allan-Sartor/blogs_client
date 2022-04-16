import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ArticleBox, Container, Footer, Score } from './styles';

import { Rating } from '../Rating/Rating';

export const Articles = () => {
  const [ articles, setArticles ] = useState([])

  // Get data for articles
  useEffect(() => {
    async function fetchMyAPI() {
      let url = "http://localhost:3001/api/v1/articles"
      let response = await fetch(url);
      response = await response.json();
      setArticles(response.data);
      console.log("List", response);
    }

    fetchMyAPI()
  }, []);

  return (
    <Container>
      { articles.map((i) => (
          <ArticleBox key={i.attributes.slug}>
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
