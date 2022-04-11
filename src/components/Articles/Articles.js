import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ArticleBox, Container, Footer, Score } from './styles';

import { api } from '../../services/api';

export const Articles = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    api.get("articles").then((resp) => setArticles(resp.data.data))
  }, [articles.length]);

  return (
    <Container>
      {articles.map((article) => (
        <Link to={`/articles/${article.attributes.slug}`}>
          <ArticleBox key={article.attributes.id}>
            <div>
              <h1>{article.attributes.title}</h1>
              <p>{article.attributes.body}</p>
            </div>
            <Score>{article.attributes.avg_score.toFixed(1)}</Score>
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
