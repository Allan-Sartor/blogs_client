import React from "react";
import { Link } from "react-router-dom";

import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <h1>Artigos</h1>
        <Link to="/articles">
          <button type="button">Novo artigo</button>
        </Link>
      </Content>
    </Container>
  );
};
