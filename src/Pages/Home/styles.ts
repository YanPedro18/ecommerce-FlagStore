import styled from "styled-components";
import photo from "../../assets/thumb5.jpg";

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  &::before {
    content: '';
    width: 100%;
    margin: 0 auto;
    height: 300px;
    border-end-start-radius: 62px;
    background-attachment: fixed;
    border-end-end-radius: 62px;
    top: 0;
    background-position: center 30%;
    background-repeat: no-repeat;
    position: absolute;
    background-image: url(${photo});
  }
`