import { styled } from "styled-components"

export const HeaderContainer = styled.header`
width: 100%;
height: 3rem;
margin: 0 auto;
z-index: 9999;
`
export const NavBar = styled.nav`
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & a{
        z-index: 9999;
        color: black;
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        margin:  1rem;
    }
    & img {
        width: 55%;
        border-radius: 1rem;
    }
    & a > strong {
        position: absolute;
        right: 0;
        margin-bottom: 0.5rem;
        margin-right: 1rem;
        font-size: 0.9rem;
        background-color: black;
        color: white;
        border-radius: 8px;
        padding: 0 0.2rem;
    }
`