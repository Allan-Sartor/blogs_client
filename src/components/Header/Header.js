import React from "react";

import { Container, Content } from "./styles";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";

export function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <Link to={'/create-article'}>
          <button type="button">Novo artigo</button>
        </Link>
      </Content>
    </Container>
  );
};
