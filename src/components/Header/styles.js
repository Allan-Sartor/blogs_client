import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h1 {
    color: var(--shape);
    display: inline;
  }
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const ModalContainer = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  input {
    margin-top: 1rem;
    width: 100%;
    padding: 0 0.40rem;
    height: 2.2rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    resize: vertical;
  }

  textarea {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    padding: 0.25rem 0.40rem;
    height: 4rem;
    border-radius: 0.25rem;
    
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    
    font-weight: 400;
    font-size: 1rem;
    
    resize: vertical;
  }


`