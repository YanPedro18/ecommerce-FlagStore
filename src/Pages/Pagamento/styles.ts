import styled from "styled-components";

export const PagamentoContainer = styled.section`
    padding-top: 4rem;
    display: flex;
    width: 100vw;
    height: 100vh;
    & h3 {
        font-size: 0.9rem;
        text-align: left;
        width: 95%;
    }
`
export const FormComponent = styled.div`
    margin-left: 1rem;
    width: 51%;
    height: 395px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #fff;
    border: 2px solid ;
    border-color: #F0F0F0;
    box-shadow: rgba(33,33,33,0.2) 0px 8px 6px -6px;
    border-radius: 5px;
`
export const InputFlex = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.2rem;
    margin-bottom: 1rem;
    font-size: 0.7rem;
    & > input {
        width: 486px;
        height: 30px;
        border-radius: 5px;
        border: 2px solid;
        padding-left: 0.7rem;
        border-color: #F0F0F0;
    }
`
export const InputFlexAdress = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 0.7rem;
    gap: 0.4rem;
    margin-bottom: 1rem;
    & div {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }
    & input {
        width: 240px;
        height: 30px;
        border: 2px solid ;
        border-radius: 5px;
        padding-left: 0.7rem;
        border-color: #F0F0F0;
    }
`
export const PagamentoComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 2rem;
`
export const PagamentoItems = styled.div`
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    & input {
        transform: translate(-0.1rem, 0.25rem);
    }
    & svg {
        transform: translate(0.1rem, 0.3rem);
    }
` 
export const Line = styled.hr`
  width: 100%;
  margin: 0 auto;
  border-color: rgb(218,220,424);
  filter: opacity(15%);
  border-width: 0; 
  height: 4px;
  border-top-width: 1px;
`
export const TotalItemsContainer = styled.aside`
  padding: 1.2rem;
  width:  30%;
  height: 31%;
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
  & h1 {
    margin-bottom: 0.2rem;
  } 
`
export const ButtonFinished = styled.button`
  width: 100%;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: black;
  color: #fff;
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
