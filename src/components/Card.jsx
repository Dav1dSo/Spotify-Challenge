function Card({ Infos }) {
    if (!Infos || !Infos.albums || !Infos.albums.items) {
        return <div>Dados de álbuns indisponíveis</div>;
    }

    const albums = Infos.albums.items;

    return (
        <div>
            {albums.map((album, index) => (
                <div key={index}>
                    <h3>{album.data.name}</h3>
                </div>
            ))}
        </div>
    );
}

export default Card;