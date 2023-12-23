import styled from "styled-components";

const NoResultWrap = styled.div`
    width: 80vw;
    margin: auto;
    padding: 2%;
`
const NoResult = styled.h2`
    text-align: center;
    color: #c0bebe;
`

const ContainerAlbuns = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: row;
`

const CardAlbum = styled.div`
    margin: 10px;
`

const AlbumImagem = styled.img`
    width: 13vw;
    height: 25vh;
`
const AlbumName = styled.h3`
    margin: 4%;
    color: #c0bebe;
    text-align: center;
`

export {NoResultWrap, NoResult, ContainerAlbuns,AlbumImagem, AlbumName, CardAlbum};