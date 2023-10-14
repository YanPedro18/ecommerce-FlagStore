import styled from "styled-components";

export const CategorieContainer = styled.section`
    position: relative;
    top: 17rem;
    margin: 0 auto;
    width: 100%;
    height: 5rem;
    background-color: #f8f9fa;
    z-index: 999;
`
export const CategorieFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:6rem;
    height: 5rem;
& svg {
    background-color: #edede9;
    padding: 0.6rem;
    border-radius: 50%;
}
`
export const CategorieItems = styled.div`
    text-align: center;
    font-size: 0.8rem;
    &:hover {
        cursor: pointer;
    }
`