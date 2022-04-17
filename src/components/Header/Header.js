import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import closeImg from '../../assets/close.svg';

import { Container, Content, ModalContainer } from "./styles";

import { api } from "../../services/api";

import { Button } from "../Button";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpenNewArticleModalOpen, setIsOpenNewArticleModalOpen] = useState(false)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [article, setArticle] = useState({})

  // Open Modal
  const handleOpenNewArticleModal = () => {
    setIsOpenNewArticleModalOpen(true);
  }

  // Close Modal
  const handleCloseNewArticleModal = () => {
    setIsOpenNewArticleModalOpen(false);
  }

  // Create New Article
  const handleCreateNewArticle = async (event) => {
    event.preventDefault();

    setArticle({
      article: {
        title,
        body
      }
    })

    if (article) {
      await api.post("articles", article).then((response) => console.log(response.data))
      alert('Seu artigo foi publicado!')
      // setTitle("");
      // setBody("");
    }
  }

  return (
    <Container>
      <Content>
        <h1>Artigos</h1>
        <Link to={'/create-article'}>
          <button
            type="button"
            // onClick={handleOpenNewArticleModal}
          >
            Novo artigo
          </button>
        </Link>
        <Modal
          isOpen={isOpenNewArticleModalOpen}
          onRequestClose={handleCloseNewArticleModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <ModalContainer onSubmit={handleCreateNewArticle}>
            <button type="button" onClick={handleCloseNewArticleModal} className="react-modal-close">
              <img src={closeImg} alt="Fechar modal"></img>
            </button>
            <h2>Cadastrar Artigo</h2>
            <input
              onChange={e => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Titulo"
            />
            <textarea
              onChange={e => setBody(e.target.value)}
              value={body}
              type="text"
              placeholder="Descrição"
            />
            <Button type="submit" name="Cadastrar artigo" style="btn-success" />
          </ModalContainer>
        </Modal>
      </Content>
    </Container>
  );
};
