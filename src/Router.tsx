import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Carrinho from "./Pages/Carrinho";
import DefaultLayout from "./layouts/DefaultLayout";
import Pagamento from "./Pages/Pagamento";
import Final from "./Pages/Final";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/carrinho" element={<Carrinho />}></Route>
        <Route path="/pagamento" element={<Pagamento />}></Route>
        <Route path="/final" element={<Final />}></Route>
      </Route>
    </Routes>
  )
}

export default Router;