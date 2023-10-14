import { CardComponent, CardContainer, CardContainerCar, CardPicture, Cards, Line, TextContainer, TextPrice } from "./styles";
import { ShoppingCartSimple } from '@phosphor-icons/react';
import { useContext } from 'react'
import { lojinhaContext } from '../../../context/LojinhaContext';




function Card() {
    const { items, getItemCarrinho } = useContext(lojinhaContext);

    return (
        <CardComponent>
            <h1>COLEÇÕES OUTONO / BOLSAS 2023</h1>
            <Cards>
                {items && items.length > 0 ? 
                  items
                  .filter((item) => item.categorieItem === "bolsas")
                  .map((item) => (
                    <CardContainer key={item.id}>
                        <CardPicture><img src={item.imgItem} alt={item.textItem} /></CardPicture>
                        <p>{item.textItem}</p>
                        <Line />
                        <CardContainerCar>
                            <TextContainer>
                                <TextPrice>de <strong>R$ 1.200,00</strong></TextPrice>
                                <strong><span>R$</span> {item.priceItem}</strong>
                            </TextContainer>
                            <button onClick={() => getItemCarrinho(item)}>
                                <ShoppingCartSimple size={22} />
                            </button>
                        </CardContainerCar>
                    </CardContainer>
                  ))
                : ""}
            </Cards>
            <h1>COLEÇÕES INVERNO / JOIAS 2023</h1>
            <Cards>
                {items && items.length > 0 
                  ? items
                  .filter((item) => item.categorieItem === "joias")
                  .map((item) => (
                    <CardContainer key={item.id}>
                        <CardPicture><img src={item.imgItem} alt={item.textItem} /></CardPicture>
                        <p>{item.textItem}</p>
                        <Line />
                        <CardContainerCar>
                            <TextContainer>
                                <TextPrice>de <strong>R$ 1.200,00</strong></TextPrice>
                                <strong><span>R$</span> {item.priceItem}</strong>
                            </TextContainer>
                            <button onClick={() => getItemCarrinho(item)}>
                                <ShoppingCartSimple size={22} />
                            </button>
                        </CardContainerCar>
                    </CardContainer>
                  ))
                : ""}
            </Cards>

            <h1>COLEÇÕES VERÃO / SAPATOS 2023</h1>
            <Cards>
            {items && items.length > 0 
                  ? items
                  .filter((item) => item.categorieItem === "sapatos")
                  .map((item) => (
                    <CardContainer key={item.id}>
                        <CardPicture><img src={item.imgItem} alt={item.textItem} /></CardPicture>
                        <p>{item.textItem}</p>
                        <Line />
                        <CardContainerCar>
                            <TextContainer>
                                <TextPrice>de <strong>R$ 1.200,00</strong></TextPrice>
                                <strong><span>R$</span> {item.priceItem}</strong>
                            </TextContainer>
                            <button onClick={() => getItemCarrinho(item)}>
                                <ShoppingCartSimple size={22} />
                            </button>
                        </CardContainerCar>
                    </CardContainer>
                  ))
                : ""}
            </Cards>
        </CardComponent>
    );
}

export default Card;