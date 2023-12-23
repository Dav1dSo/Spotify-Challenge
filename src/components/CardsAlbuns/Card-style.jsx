import styled from "styled-components";

const NoResultWrap = styled.div`
    margin: auto;
    width: 80vw;
    padding: 2%;
`
const NoResult = styled.h2`
    text-align: center;
    color: #c0bebe;
`

const ContainerAlbuns = styled.div`
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center; 

    div {
        margin: auto;
    }

    p {
        width: 70%;
        color: #c0bebe;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-align: center; 
        margin: auto; 
        /* margin-bottom: 2vh; */
}`

const CardAlbum = styled.div`
    width: 15vw;    
    padding: 4%;
`

const AlbumImagem = styled.img`
    height: 25vh;
    display: block;  
    margin: auto;  
    margin-bottom: 2vh;
`

export {NoResultWrap, NoResult, ContainerAlbuns, AlbumImagem, CardAlbum };  