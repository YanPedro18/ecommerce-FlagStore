import styled from "styled-components";

export const FinalContainer = styled.section`
width: 100%;
height: 28.91rem;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
margin: 0 auto;
gap: 1rem;
flex-direction: column;
& img {
    width: 100px;
}
`
export const ButtonFinished = styled.button`
  width: 100%;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.4rem;
  font-size: 0.7rem;
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