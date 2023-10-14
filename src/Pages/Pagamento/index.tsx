import { Bank, CreditCard, Wallet } from "@phosphor-icons/react"
import { ButtonFinished, FormComponent, InputFlex, InputFlexAdress, Line, PagamentoComponent, PagamentoContainer, PagamentoItems, TotalItemsContainer } from "./styles"
import { useContext } from "react"
import { lojinhaContext } from "../../context/LojinhaContext"
import { Link } from "react-router-dom"


function Pagamento() {
  const { newItemCarrinho, finishedCarrinho } = useContext(lojinhaContext)


  function handleFinished(item: string) {
    finishedCarrinho(item)
  }
  return (
    <>
      <PagamentoContainer>
        <FormComponent>
          <h3>Informações</h3>
          <form action="">
            <InputFlex>
              <label htmlFor="">Nome</label>
              <input type="text" name="nome" />
            </InputFlex>
            <InputFlex>
              <label htmlFor="">Endereço de e-mail</label>
              <input type="email" />
            </InputFlex>
            <InputFlex>
              <label htmlFor="">Endereço</label>
              <input type="text" />
            </InputFlex>
            <InputFlexAdress>
              <div>
                <label htmlFor="">CEP</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Cidade</label>
                <input type="text" />
              </div>
            </InputFlexAdress>
            <h3>Pagamento</h3>
            <PagamentoComponent>
              <PagamentoItems>
                <input type="checkbox" />
                <p>Pix <Bank size={22} /></p>
              </PagamentoItems>
              <PagamentoItems>
                <input type="checkbox" />
                <p>Cartão de credito<CreditCard size={22} /></p>
              </PagamentoItems>
              <PagamentoItems>
                <input type="checkbox" />
                <p>Transferencia<Wallet size={22} /></p>
              </PagamentoItems>
            </PagamentoComponent>
          </form>
        </FormComponent>

        <TotalItemsContainer>
          <h1>Total da Compra</h1>
          <Line />
          <p><strong>Total: {
            newItemCarrinho.map(items => parseFloat(items.priceItem.replace(/\./g, '').replace(',', '.')) * items.quantity)
              .reduce((total, preco) => total + preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
          }
          </strong>
          </p>
          <Link to="/final" onClick={() => handleFinished("finalizado")}> <ButtonFinished>Pagar</ButtonFinished> </Link>
        </TotalItemsContainer>

      </PagamentoContainer>
    </>
  )

}

export default Pagamento