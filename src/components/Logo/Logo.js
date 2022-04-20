import logo from '../../assets/logo.svg'
import { Container } from './styles'

export function Logo() {
  return(
    <Container>
      <img alt="logo" src={logo} />
      <h1>Artigos</h1>
    </Container>
  )
}