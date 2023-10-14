import { useContext } from "react";
import {
  ButtonFinished,
  ButtonTrash,
  CardCarrinho,
  CarrinhoLayout,
  ContainerCarrinho,
  InputNumberInc,
  ItemCarrinho,
  ItemText,
  ItemsFlex, Line, ListItemsFlex, NullItemsCarrinho, TotalItemsContainer
} from "./styles";
import { lojinhaContext } from "../../context/LojinhaContext";
import { Link } from "react-router-dom";
import { Trash } from "@phosphor-icons/react";

interface LojinhaItemsType {
  id: string;
  imgItem: string;
  textItem: string;
  priceItem: string;
  categorieItem: string;
  quantity: number; // Adicione essa linha
}

function Carrinho() {
  const { newItemCarrinho, getItemCarrinho, removeItemCarrinho, getRemoveItem } = useContext(lojinhaContext);
  function inc(item: LojinhaItemsType) {
    getItemCarrinho(item);
  }
  function dec(item: LojinhaItemsType) {
    removeItemCarrinho(item);
  }

  function deteleItem(item: LojinhaItemsType) {
    getRemoveItem(item)
  }
  return (
    <ContainerCarrinho>
      <CarrinhoLayout>
        {newItemCarrinho && newItemCarrinho.length > 0 ?
          newItemCarrinho.map((stateItem, index) => (
            <CardCarrinho key={index}>
              <ItemCarrinho>
                <img src={stateItem.imgItem} alt="" />
                <ItemText>
                  <p>{stateItem.textItem}</p>
                  <InputNumberInc>
                    <button onClick={() => dec(stateItem)}>-</button>
                    <input name="number" type="text" disabled value={stateItem.quantity} />
                    <button onClick={() => inc(stateItem)}>+</button>
                  </InputNumberInc>
                </ItemText>

                <p><strong>{(stateItem.quantity * parseFloat(stateItem.priceItem.replace(/\./g, '').replace(',', '.'))).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</strong></p>
                <ButtonTrash onClick={() => deteleItem(stateItem)}><Trash size={20} /></ButtonTrash>
              </ItemCarrinho>
            </CardCarrinho>
          ))
          :
          <NullItemsCarrinho>
            <h1>No momento, não ha nenhum item no carrinho ;(</h1>
            <Link to="/"> <ButtonFinished>Página inicial</ButtonFinished> </Link>
          </NullItemsCarrinho>
        }
      </CarrinhoLayout>

      {newItemCarrinho && newItemCarrinho.length > 0 ?
        <TotalItemsContainer>
          <h1>Total da Compra</h1>
          <ListItemsFlex>
            {
              newItemCarrinho.map(items => {
                return <ItemsFlex key={items.id}>
                  <article>
                    <p>{items.textItem}</p>
                    <span>{items.quantity}x</span>
                  </article>
                  <p>{
                  parseFloat(items.priceItem.replace(/\./g, '').replace(',', '.'))
                  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</p>
                  <Line />
                </ItemsFlex>
              })
            }
          </ListItemsFlex>
          <p><strong>Total: {
            newItemCarrinho.map(items => parseFloat(items.priceItem.replace(/\./g, '').replace(',', '.')) * items.quantity)
              .reduce((total, preco) => total + preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
          }
          </strong>
          </p>
          <Link to="/pagamento"> <ButtonFinished>Enviar</ButtonFinished> </Link>
        </TotalItemsContainer>
        :
        ""
      }
    </ContainerCarrinho>
  );
}

export default Carrinho;
