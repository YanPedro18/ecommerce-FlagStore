//ficava aqui agora foi pra pasta de context
// interface CarrinhoContextType {
import Card from "../components/Card"
import Categorie from "../components/Categorie"
import { HomeContainer } from "./styles"

// }

// export const lojinhaContext = createContext({} as CarrinhoContextType);

function Home() {
  return (
    //Foi para pasta context.
    // <lojinhaContext.Provider value={ { } }>
    <HomeContainer>
      <Categorie />
      <Card />
    </HomeContainer>

    // </lojinhaContext.Provider>
  )
}

export default Home