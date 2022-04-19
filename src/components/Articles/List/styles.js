import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1rem 1rem;
  margin: 1rem 1rem 1rem 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--shape);
 
  h1 {
    color: var(--text-title);
  }

  p { 
    color: var(--text-body);
    height: 7.65rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    font-size: 0.75rem;
  }

  border: 0;
  border-radius: 0.25rem;

  /* transition: border 0.2s; */

  /* &:hover {
    border: 0.2rem solid var(--blue);
    cursor: pointer;
  }   */

`;

export const Score = styled.div`
  
`

export const Footer = styled.div`
  
`

export const Body = styled.div`
  
`