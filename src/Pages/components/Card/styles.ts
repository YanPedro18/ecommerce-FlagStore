import { styled } from "styled-components"

export const CardComponent = styled.section`
  text-align: center;
  margin-top: 17rem;
  z-index: 999;
& h1 {
  text-align: left;
  font-size: 1.5rem;
  width: 70%;
  font-family: 'Roboto', sans-serif;
  font-family: 'Roboto Mono', monospace;
  font-family: 'Sofia Sans Condensed', sans-serif;
  font-family: 'Urbanist', sans-serif;
  padding: 0.6rem;
}
`
export const Cards = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const CardContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 13rem;
  height: 18rem;
  border-radius: 8px;
  background: #fff;
  border-color: #ffff;
  display: flex;
  flex-direction: column;
  & span > strong {
    position: relative;
    top: 0;
    align-items: center;
  }
  & p{
      text-align: center;
      font-weight: 600;
      font-size: 0.85rem;
      margin-bottom: 0.4rem;
  }
  & button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.3rem;
      color: #fff;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      margin: 0 auto;
      text-align: center;  
  }
  & button:hover {
      background-color: #2b2b2b;
  }
  &:hover{
    box-shadow: rgba(0,0,0,0.1) 0px 6px 6px 0px;
  }
`
export const Line = styled.hr`
  width: 70%;
  margin: 0 auto;
  border-color: rgb(218,220,224);
  filter: opacity(50%);
  border-width: 0; 
  height: 4px;
  border-top-width: 1px;
`
export const CardPicture = styled.div`
  overflow: hidden;
  text-align: center;
  margin-bottom: 1rem;
  border-radius: 8px;
  & img {
      width: 22rem;
      height: 15rem;
      cursor: pointer;
      text-align: center;
      max-width: 100%;
      max-height: 100vh;
      transition: all  1.2s cubic-bezier(0.075, 0.82, 0.165, 1);
      -moz-transition: all 0.5s;
      -webkit-transition: all 0.5s;
      margin: 0;
      padding: 0;
      border-radius: 8px;
      transform: scale(1.1);
  }
  & img:hover {
      border-radius: 8px;
      transform: scale(1.3);
      transition: all  1.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TextPrice = styled.div`
  font-size: 0.7rem;
  color: grey;
  & strong {
    margin-right: 0.6rem;
    color: grey;
    text-decoration: line-through;
  }
`
export const CardContainerCar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 0.5rem;
  text-align: center;
  & strong:nth-child(2n) {
    margin-right: 0.6rem;
    font-size: 0.8rem;
  }
`