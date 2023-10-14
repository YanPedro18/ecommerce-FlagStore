
import { Link } from "react-router-dom"
import cart from "../../assets/carrinho.png"
import { ButtonFinished, FinalContainer } from "./styles"
function Final() {
  return (
    <FinalContainer>
      <h1>Você acabou de comprar seus produtos!</h1>
      <img src={cart} alt="" />
      <span>Obrigado por comprar com a Flag Store!</span>
      <Link to="/"><ButtonFinished >Página inicial</ButtonFinished></Link>
    </FinalContainer>
  )
}

export default Final