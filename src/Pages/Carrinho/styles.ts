import styled from "styled-components";

export const ContainerCarrinho = styled.main `
  width: 70%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
  gap: 2rem;
`
export const NullItemsCarrinho = styled.div`
  height: 55vh;
  & button {
    margin: 1rem 0 0.5rem 0;
  }
`
export const CarrinhoLayout = styled.div`
  width: 57%;
  height: auto;
  overflow: auto;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`
export const CardCarrinho = styled.section`
  margin-bottom: 0.5rem;
  text-align: center;
  background-color: #fff;
  border: 2px solid ;
  border-color: #F0F0F0;
  box-shadow: rgba(33,33,33,0.2) 0px 8px 6px -6px;
  border-radius: 5px;
  width: 100%;
  height: 8rem;
  
`
export const ItemCarrinho = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  width: 95%;
  margin: 1rem auto;
  & img {
      width: 85px;
      height: 85px;
      border-radius: 5px;
      border: 2px solid black;
      padding: 0.1rem;
      outline: none;
  }
  & p  {
      margin: 0 auto;
      text-align: center;
      font-size: 0.8rem;
  }
`
export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.9rem;
`
export const InputNumberInc = styled.div`
  width: 4.1rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-top: 1rem;
  border: 1px solid  #e0e0e0;
  & input {
      width: 2rem;
      text-align: center;
      color: black;
      border: 1px transparent solid;
  }
  & button{
      margin: 0 auto;
  }
  & button:nth-child(1) {
      cursor: pointer;
      background: none;
      padding: 0.2rem;
      border: 1px solid transparent;
      color: grey;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      border-right: 1px solid #e0e0e0;
  }
  & button:nth-child(3n+0) {
      background: none;
      cursor: pointer;
      border: 1px solid transparent;
      padding: 0.2rem;
      color: grey;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      border-left: 1px solid #e0e0e0;
  }
  & button:hover {
      color: black;
  }
`
export const ButtonTrash = styled.button`
background: transparent;
padding: 0.1rem;
border: none;
border-radius: 50%;
margin-left: 0.1rem;
transition: 0.6s 100ms  cubic-bezier(0.075, 0.82, 0.165, 1);
& svg {
transform: translateY(0.1rem);
}
&:hover {
  transition: 0.7s 100ms  cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 50%;
  background-color: #e0e0e0;
  color: #7D7C7C;
  cursor: pointer;
}
`
export const TotalItemsContainer = styled.article`
  padding: 1.2rem;
  width:  50%;
  height: 61%;
  margin: 0 auto;
  background-color: grey;
  border: 2px solid ;
  border-radius: 5px;
  border-color: #F0F0F0;
  background-color: #ffffff;
  box-shadow: rgba(33,33,33,0.2) 0px 8px 6px -6px;
  & p  {
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: right;
  }
`
export const ListItemsFlex = styled.ul `
  margin-top: 1rem;
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
export const ItemsFlex = styled.li`
  width: 100%;
  text-align: end;
  & article {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  & strong{
      text-align: end;
      font-size: 0.8rem;
  }
  & p {
      margin-top: 0.1rem;
      margin-bottom: 1rem;
      font-size: 0.8rem;
  }
  & span {
      font-size: 0.8rem;
      margin-bottom: 1.1rem;
  }
`
export const Line = styled.hr`
  width: 100%;
  margin: 0 auto;
  border-color: rgb(218,220,224);
  filter: opacity(50%);
  border-width: 0; 
  height: 4px;
  border-top-width: 1px;
`
export const ButtonFinished = styled.button`
  width: 100%;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: black;
  color: white;
  text-align: center;
  margin: 0 auto;
  transition: 0.8s 100ms  cubic-bezier(0.075, 0.82, 0.165, 1);
  & a {
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
      background-color: #2b2b2b;
      transform: scale(0.97);
      transition: 0.8s 100ms  cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`