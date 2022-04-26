import React, { useEffect, useState } from 'react';

import { api } from '../../../services/api';

import { Link } from 'react-router-dom';

import { Rating } from '../../Rating/Rating';
import { Pagination } from '../../Pagination/Pagination';

import { ActionBox, ArticleBox, ArticleInfo, ButtonBox, Container, Footer, FooterPagination, Score } from './styles';
import { FaEye, FaRegEdit, FaTrash } from 'react-icons/fa'

export function ArticleList() {
  const [articles, setArticles] = useState([])
  const [pagesInfo, setPagesInfo] = useState([])
  const [offSet, setOffSet] = useState(0)
  const [loaded, setLoaded] = useState(false)

  // Get data for articles
  useEffect(() => {
    getArticleInfo()
  }, [offSet]);

  function getArticleInfo() {
    api.get(`articles?page=${offSet}`)
      .then((response) => {
        setArticles(response.data.data)
        setPagesInfo(response.data.meta)
        setLoaded(true)
        console.log(response.data)
      })
      .catch((err) =>
        alert('Não foi possivel listar todos os artigos! Servidor OFF', err)
      )
  }

  async function handleDeleteArticle(slug) {
    let confirmExclusion = window.confirm('Você tem certeza que deseja apagar o artigo ?')

    if (confirmExclusion === true) {
      await api.delete(`articles/${slug}`)
        .then((resp) => {
          getArticleInfo()
          console.log(resp)
        })
        .finally(() => {
          alert('Artigo deletado!')
        })
        .catch((err) => {
          alert('Não foi possivel deletar o artigo!', err)
        });
    } else {
      alert('Você desistiu de apagar o artigo!')
    }
  }

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

              <button onClick={() => { handleDeleteArticle(i.attributes.slug) }}>
                <span data-tooltip="Deletar artigo">
                  <FaTrash size={21} color="#363f5f" />
                </span>
              </button>
            </ButtonBox>

            <Score>
              <p>Média de avaliações:</p>
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
      {loaded ? (
        <FooterPagination>
          <Pagination
            setOffSet={setOffSet}
            offset={pagesInfo.current_page}
            limit={pagesInfo.itemsPerPage}
            total={pagesInfo.totalItems}
          />
        </FooterPagination>
      ) : null}

    </Container>
  )
}
