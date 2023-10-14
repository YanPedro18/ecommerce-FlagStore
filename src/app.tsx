import './app.css'
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles/global"
import Router from './Router'
import LojinhaContext from './context/LojinhaContext'

export function App() {
  return (
    <>
      <BrowserRouter>
        <LojinhaContext>
          <Router />
        </LojinhaContext>
        <GlobalStyle />
      </BrowserRouter>
    </>
  )
}

export default App;
