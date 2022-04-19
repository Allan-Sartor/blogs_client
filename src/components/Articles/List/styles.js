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

export const ActionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 15rem;
`

export const Footer = styled.div`
  p {
    font-size: 1rem;
    color: var(--text-body);
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

export const ArticleInfo = styled.div`
  width: 100%;
  
  h1 {
    color: var(--text-title);
  }

  p { 
    color: var(--text-body);
    height: 7.65rem;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;

  a {
    font-size: 1rem;

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.8);
    }
  }
`