import {
  AlbumImagem,
  CardAlbum,
  ContainerAlbuns,
  NoResult,
  NoResultWrap,
} from "./Card-style";

function Card({ Infos }) {
  if (!Infos || !Infos.albums || !Infos.albums.items) {
    return (
      <NoResultWrap>
        <NoResult>Nenhum dado encontrado</NoResult>
      </NoResultWrap>
    );
  }

  const albums = Infos.albums.items;

  return (
    <ContainerAlbuns>
      {albums.map((album, index) => (
        <div key={index}>
          <CardAlbum>
            {album.data.coverArt &&
              album.data.coverArt.sources &&
              album.data.coverArt.sources.length > 0 && (
                <AlbumImagem src={album.data.coverArt.sources[0].url} alt="" />
              )}
                <p>{album.data.name}</p>
          </CardAlbum>
        </div>
      ))}
    </ContainerAlbuns>
  );
}

export default Card;
