import styled from 'styled-components';
import { Gray } from './Stars/Gray'
import { Selected } from './Stars/Selected'
import { Hover } from './Stars/Hover'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Context = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

.view-article { 
  grid-area: 1 / 1 / 2 / 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.review { 
  grid-area: 1 / 2 / 2 / 3;
}

.evaluations { 
  grid-area: 2 / 1 / 3 / 3; 
}

.styles-box {
  padding: 1rem;
  margin: 1rem 1rem 1rem;
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

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  input {
    margin: 1rem;
    width: 23rem;
    height: 2rem;
    background: var(--background);
    border: none;
    padding: 0 0.40rem;
    border-radius: 0.25rem;
    font-size: 1rem;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  textarea {
    background: var(--background);
    width: 23rem;
    padding: 0.25rem 0.40rem;
    height: 6rem;
    border: none;
    font-size: 1rem;
    border-radius: 0.25rem;
    resize: vertical;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  textarea:focus, input:focus{
    border: 2px solid var(--blue-light);
    outline: none;
  }

  button {
    font-size: 1rem;
    width: 23rem;
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