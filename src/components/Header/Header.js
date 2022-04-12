import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";

import { Button } from "../Button";

import { Container, Content, ModalContainer } from "./styles";
import closeImg from '../../assets/close.svg';

export const Header = (props) => {
  const isOpenNewArticleModalOpen = props.isOpen
  const handleOpenNewArticleModal = props.openModal
  const handleCloseNewArticleModal = props.closeModal

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");

  const handleSubmit = async () => {
    await fetch(`http://localhost:3001/api/v1/articles`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        article: { title: title, description: description },
      }),
    });
    setTitle("");
    setDescription("");
    alert("Artigo publicado com sucesso!");

    // await api.fetch('articles',)
    // // await api.post("articles/")
    // //   setArticle({ ...article });
    // //   alert("Artigo publicado com sucesso!");
    // //   setArticle({ title: "", description: "" });
  };

  

  // const handleChange = (e) => {
  //   e.preventDefault();

  //   setArticle(Object.assign({}, article, { [e.target.name]: e.target.value }));

  //   console.log('article:', article)
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   
  // };

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
              }}
              value={title || ""}
              type="text"
              name="title"
              placeholder="Titulo"
            />
            <textarea 
              onChange={(e) => {
                e.preventDefault();
                setDescription(e.target.value)
              }}
              value={description || ""}
              type="text"
              name="description"
              placeholder="Descrição" 
            />
            <Button type="submit" name="Cadastrar artigo" style="btn-success" />
          </ModalContainer>
        </Modal>
      </Content>
    </Container>
  );
};
