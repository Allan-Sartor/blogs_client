import React from 'react';
import { Link } from 'react-router-dom';

import { ArticleBox, Container, Footer, Score } from './styles';

import { Rating } from '../Rating/Rating';

export const Articles = (props) => {
  const articlesNew = props.loadArticles

  return (
    <Container>
      {articlesNew.map((article) => (
        <Link to={`/articles/${article.attributes.slug}`}>
          <ArticleBox key={article.attributes.id}>
            <div>
              <h1>{article.attributes.title}</h1>
              <p>{article.attributes.body}</p>
            </div>
            <Score>
              <Rating score={article.attributes.avg_score.toFixed(1)} />
            </Score>
            <Footer>
              Data de criação:
              {new Intl.DateTimeFormat("pt-br").format(
                new Date(article.attributes.created_at)
              )}
            </Footer>
          </ArticleBox>
        </Link>
      ))}
    </Container>
  )
}
