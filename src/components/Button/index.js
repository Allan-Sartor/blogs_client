import './styles.css';

export const Button = (props) => {
  const name = props.name
  const style = props.style
  const type = props?.type

  return(
    <button type={type} className={style}>{name}</button>
  )
}