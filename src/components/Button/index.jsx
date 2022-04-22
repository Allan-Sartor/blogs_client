import './styles.css';

export const Button = (props) => {
  const name = props.name
  const style = props.style
  const type = props?.type
  const click = props.onClick

  return(
    <button type={type} onClick={click} className={style}>{name}</button>
  )
}