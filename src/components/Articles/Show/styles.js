import styled from 'styled-components';
import { Gray } from './Stars/Gray'
import { Selected } from './Stars/Selected'
import { Hover } from './Stars/Hover'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Context = styled.div`
.styles-box {
  padding: 1rem;
  margin: 1rem 1rem 1rem 0;
  border-radius: 0.25rem;
  background-color: var(--shape);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h1 {
    text-align: center;
    color: var(--text-title);
  }
}

`;

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

export const RatingBox = styled.div`
  background-color: var(--shpae);
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;
  cursor: pointer;

  label {
    width: 3.5rem;
    height: 3.5rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Gray}");
    cursor: pointer;
  }

  input {
    display: none;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Hover}");
  }
`

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

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

  textarea:focus, input:focus{
    border: 2px solid var(--blue-light);
    outline: none;
  }

  /* div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
      width: 100%;
      margin-right: 1rem;
    }
  } */
`

export const ArticleView = styled.div`
  h1 {
    color: var(--text-title);
  }
  p {
    color: var(--text-body);
    max-height: 19rem;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const ReviewCount = styled.div`
  p { 
    font-weight: bold;
    color: var(--text-title)
  }
`

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