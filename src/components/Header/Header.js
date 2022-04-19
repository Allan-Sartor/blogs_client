import React from "react";

import { Container, Content } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Content>
        <h1>Artigos</h1>
        <Link to={'/create-article'}>
          <button type="button">Novo artigo</button>
        </Link>
      </Content>
    </Container>
  );
};
