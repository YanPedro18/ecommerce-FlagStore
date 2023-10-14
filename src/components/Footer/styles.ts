import styled from "styled-components";
import photo from "../../assets//topography.svg"

export const FooterContainer = styled.footer`
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: end;
    gap: 1rem;
    bottom: 0;
    color: white;
    background-color: black;
    z-index: 1;
    &::before {
      position: absolute;
      content: '';
      background-image: url(${photo});
      width: 100%;
      height: 100px;
      filter: invert(50%);
      z-index: 999;
      top: 0;
      }
    & p{
      z-index: 9999 !important;
      width: 100%;
      height: 19px;
      font-size: 0.8rem;
      }
    & div  {
      cursor: pointer;
      margin-bottom: 0.6rem;
      z-index: 9999 !important;
    }
    & div > a > svg {
      color: white;
    }
`