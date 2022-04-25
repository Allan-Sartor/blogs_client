import styled from "styled-components";

export const ListPagination = styled.ul`
  display: flex;
  list-style: none;
  
  li + li {
    margin-left: 0.80rem;
  }

  button {
    width: 2rem;
    border-radius: 0.25rem;
    border: 0.15rem solid var(--blue);
    background: var(--blue-light);
  }

  .active_button {
    background: var(--white);
    border: 0.15rem solid var(--blue);
    font-weight: bold;
    color: var(--white);
  }
`

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.75rem;
`