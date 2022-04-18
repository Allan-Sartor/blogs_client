import styled from 'styled-components';

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background);
  border-radius: 0.25rem;
  margin-top: 0.50rem;
  padding: 0.30rem 0.30rem;

  h4, h5 {
    color: var(--text-title);
  }

  div {
    margin: 0.25rem 0;
    p {
      color: var(--text-title);

      b { 
        color: var(--text-title);
      }
    }
  }
`

export const RatingContent = styled.div`
  text-align: center;
  font-size: 1rem;
  padding: 1rem 0 2rem 0;

  h5 {
    color: var(--text-title);
    font-weight: bold;
  }

`

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  padding: 1rem 0 2rem 0;

  h5 {
    color: var(--text-title);
    font-weight: bold;
  }

`
