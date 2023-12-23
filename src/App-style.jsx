import styled from "styled-components";

const Home = styled.div`
    height: 100vh;
    background-color: #161616;
`

const Imagem = styled.img`
    margin: 2%;
    width: 8vw;
`

const SearchWrap = styled.div`
    width: 80vw;
    margin: auto;
`

const InputSearch = styled.input`
    border: none;
    border-bottom:0.5px solid #5e5e5e;
    width: 100%;
    background-color: transparent;
    height: 4vh;
    color: #d8d8d8;
    font-size: 3rem;
    padding: 1% 0% 1%;

    
    &:focus {
        font-size: 3rem;
        outline: none;
        color: #c0bebe;
        padding: 1% 0% 1%;
    }

`

const Title = styled.h4`
    font-family: 'Times New Roman', Times, serif;
    color: #c0bebe;
`

export { Home, Imagem, InputSearch, Title, SearchWrap };