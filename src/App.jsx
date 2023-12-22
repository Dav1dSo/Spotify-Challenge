import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const client_id = "";
  const client_secret = "";

  const [token, setToken] = useState("");

  const searchAlbum = () => {
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      method: "post",
      headers: {
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: "grant_type=client_credentials",
    };

    axios(authOptions)
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.access_token;
          setToken(token);
          localStorage.setItem('spotifyToken', token);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetAlbums = async () => {
    const storedToken = localStorage.getItem('spotifyToken');
    console.log(storedToken);
    const Albums = await axios.get('https://api.spotify.com/v1/albums', {
      headers: {
        'Authorization': 'Bearer ' + storedToken,
      }
    })
    const resultAlbums = Albums.json();
    console.log(resultAlbums);
  } 


  return (
    <>
      <h1>Hello World</h1>
      <button type="button" onClick={searchAlbum}>
        gerar Token
      </button>

    <button type="button" onClick={GetAlbums}>Pesquisar album</button>

    </>
  );
}

export default App;
