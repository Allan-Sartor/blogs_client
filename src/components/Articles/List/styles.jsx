import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const ArticleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0 1rem 1rem;
  margin: 1rem 1rem 1rem 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--shape);
  border: 0;
  border-radius: 0.25rem;
`;

export const ArticleInfo = styled.div`
  width: 100%;
  
  h1 {
    color: var(--text-title);
  }

  p { 
    color: var(--text-body);
    max-height: 100%;
  }
`

export const ActionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 15rem;

  margin-top: 1rem;

  border-left: 2px solid var(--blue-light);
`

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;

  a {
    font-size: 1rem;
    position: relative;

    border-radius: 50%;
    transition: filter 0.2s;

    span {
      border-radius: 50%;
      display: flex;
    }

    &:hover{
      filter: brightness(0.9);
      background: var(--shape);
    }

    [data-tooltip]:after {
      display: none;
      position: absolute;
      top: -40px;
      padding: 5px;
      border-radius: 3px;
      left: calc(100% + 3px);
      content: attr(data-tooltip);
      white-space: nowrap;
      background-color: var(--shape);
      color: var(--text-title);
      font-weight: bold;
      z-index: 99;
    }

    [data-tooltip]:hover:after {
      display: block;
    }
  }

  button {
    font-size: 1rem;
    position: relative;
    border: none;

    border-radius: 50%;
    transition: filter 0.2s;

    span {
      border-radius: 50%;
      display: flex;
    }

    &:hover{
      filter: brightness(0.9);
      background: var(--shape);
    }

    [data-tooltip]:after {
      display: none;
      position: absolute;
      top: -40px;
      padding: 5px;
      border-radius: 3px;
      left: calc(100% + 3px);
      content: attr(data-tooltip);
      white-space: nowrap;
      background-color: var(--shape);
      color: var(--text-title);
      font-weight: bold;
      z-index: 99;
    }

    [data-tooltip]:hover:after {
      display: block;
    }
  }
`

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--text-body);
  }
`

export const Footer = styled.div`
  p {
    font-size: 1rem;
    color: var(--text-body);
  }
`