import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';

export const ArticleContext = createContext();

export const ArticleProvider = ({children}) => {
  const { slug } = useParams();

  const [ article, setArticle ] = useState({});
  const [ isCreatedReview, setIsCreatedReview ] = useState(false);
  const [ loaded, setLoaded ] = useState(false);
  const [ review, setReview ] = useState({});

   // // Get data for article
   useEffect(() => {
    getArticle()
  }, [isCreatedReview]);

  async function getArticle() {
    let slugURL = slug

    await api.get(`articles/${slugURL}`)
      .then((response) => {
        setArticle(response.data);
        setIsCreatedReview(false);
        setLoaded(true);
      })
      .catch((err) => alert('Não foi possivel encontrar as informações de seu artigo!', err))
  }

  // Seting data for New Review
  // console.log('Seting data for New Article:', review)
  const handleChange = (e) => {
    e.preventDefault();
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
  };

  // Create new Review for article
  async function handleCreateNewArticleReview(e) {
    e.preventDefault();
    const article_id = article.data.id;

    if (review.title !== '' && review.description !== '' && review.score > 0) {
      await api.post("reviews/", { review, article_id })
        .then((response) => {
          const included = [...article.included, response.data.data];
          setIsCreatedReview(true);
          setArticle({ ...article, included });
          setReview({ title: "", description: "", score: 0 });
          alert("Analise publicada com sucesso!");

        })
        .catch(err => {
          alert("Analise não publicada!");
          console.log(err);
        })
    } else {
      alert('Preencha os campos para publicar sua avaliação!')
    }
  }

  // Seting score for Review
  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };

  return (
    <ArticleContext.Provider 
      value={{ 
        article,
        review,
        loaded,
        change: handleChange,
        handlecreate: handleCreateNewArticleReview,
        setrating: setRating
      }}>
      { children }
    </ArticleContext.Provider>
  )
}