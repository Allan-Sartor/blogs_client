import styled from 'styled-components';

export const ContainerForm = styled.div`
  max-width: 1120px;
  background: var(--shape);
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 0.25rem;

  form {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;    

    h1 {
      color: var(--text-title)
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
      width: 100%;
      padding: 0.25rem 0.40rem;
      height: 8rem;
      border-radius: 0.25rem;
      
      border: 1px solid #d7d7d7;
      background: #e7e9ee;
      
      font-weight: 400;
      font-size: 1rem;
      
      resize: vertical;
    }

    span {
      font-size: 0.90rem;
      color: var(--red)
    }

    div {
      display: inline-block;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      a {
        width: 100%;
        margin-right: 1rem;
      }
    }
  }
`