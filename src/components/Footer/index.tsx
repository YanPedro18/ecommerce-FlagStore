import { Link } from "react-router-dom"
import { FooterContainer } from "./styles"
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"


function Footer() {
  return (
<>
<FooterContainer>
       <p>Todos os direitos reservados  - @2023.</p>
       <div>
          <Link to="">
            <GithubLogo size={32} />
          </Link>
          <Link to="https://www.linkedin.com/in/yanpedro18/" target="_blank">
            <LinkedinLogo size={32} />
          </Link>
       </div>
   </FooterContainer>
</>
  )
}

export default Footer