import axios from "axios";
import "./App-style.jsx";
import { useState } from "react";
import Card from "./components/CardsAlbuns/Card";
import {
  Home,
  Imagem,
  InputSearch,
  SearchWrap,
  Title,
} from "./App-style.jsx";

function App() {
  const [InfoSearch, setInfoSearch] = useState([]);
  const [QuerySearch, setQuerySearch] = useState();

  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: QuerySearch,
      type: "multi",
      offset: "0",
      limit: "10",
      numberOfTopResults: "5",
    },
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "",
    },
  };

  const Search = async (event) => {
    setQuerySearch(event.target.value);
    try {
      const response = await axios.request(options);
      setInfoSearch(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Home>
      <Imagem src="../src/assets/spotify-icon.png" alt="" />
      <SearchWrap>
        <Title> Busque por artistas, álbuns ou músicas </Title>
        <InputSearch
          type="text"
          name="search"
          id="search"
          onChange={Search}
          placeholder="Comece a escrever..."
        />
      </SearchWrap>
      <Card Infos={InfoSearch} />
    </Home>
  );
}

export default App;
