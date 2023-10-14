import { Link } from "react-router-dom"
import { HeaderContainer, NavBar } from "./styles"
import { ShoppingCartSimple } from "@phosphor-icons/react"
import {useContext} from "react"
import photo from "../../assets/logo.png"
import { lojinhaContext } from "../../context/LojinhaContext"


function Header() {
  const {totalCart} = useContext(lojinhaContext)
  return (
  
    <HeaderContainer>
      <NavBar>
        <Link to="/"><img src={photo} /> </Link>
        <Link to="/carrinho"><ShoppingCartSimple size={32} /><strong>{totalCart}</strong></Link>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header