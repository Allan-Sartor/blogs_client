import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import closeImg from '../../assets/close.svg';

import { Container, Content, ModalContainer } from "./styles";

import { api } from "../../services/api";

import { Button } from "../Button";

export const Header = () => {
  const [isOpenNewArticleModalOpen, setIsOpenNewArticleModalOpen] = useState(false)

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [article, setArticle] = useState({})

  const handleOpenNewArticleModal = () => {
    setIsOpenNewArticleModalOpen(true);
  }

  const handleCloseNewArticleModal = () => {
    setIsOpenNewArticleModalOpen(false);
  }

  const handleSubmit = async () => {
    await api.post("articles", article)
      .then((response) => setArticle(response.data))
      .catch((err) => {
        alert('Não foi possivel publicar seu artigo', err)
      });
    alert('Seu artigo foi publicado!')
    setTitle("");
    setBody("");
    setArticle({})
  }

  return (
    <Container>
      <Content>
        <h1>Artigos</h1>
        <button
          type="button"
          onClick={handleOpenNewArticleModal}
        >
          Novo artigo
        </button>
        <Modal
          isOpen={isOpenNewArticleModalOpen}
          onRequestClose={handleCloseNewArticleModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <ModalContainer onSubmit={handleSubmit}>
            <button type="button" onClick={handleCloseNewArticleModal} className="react-modal-close">
              <img src={closeImg} alt="Fechar modal"></img>
            </button>
            <h2>Cadastrar Artigo</h2>
            <input
              onChange={(e) => {
                e.preventDefault();
                setTitle(e.target.value)
                setArticle(Object.assign({}, article, { title: title, body: body }))
              }}
              value={title || ""}
              type="text"
              name="title"
              placeholder="Titulo"
            />
            <textarea
              onChange={(e) => {
                e.preventDefault();
                setBody(e.target.value)
                setArticle(Object.assign({}, article, { title: title, body: body }))

              }}
              value={body || ""}
              type="text"
              name="body"
              placeholder="Descrição"
            />
            <Button type="submit" name="Cadastrar artigo" style="btn-success" />
          </ModalContainer>
        </Modal>
      </Content>
    </Container>
  );
};
