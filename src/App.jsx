import axios from "axios";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";

function App() {

  const [InfoSearch, setInfoSearch] = useState([]);
  const [QuerySearch, setQuerySearch] = useState();

  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/search/',
    params: {
      q: QuerySearch,
      type: 'multi',
      offset: '0',
      limit: '10',
      numberOfTopResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': ''
    }
  };

  const Search = async (event) => {
    setQuerySearch(event.target.value);
    try {
      const response = await axios.request(options);
      setInfoSearch(response.data);
    } catch (error) {
      console.error(error); 
    }
  }

  return (
    <>
      <h1>Hello World</h1>
      <input type="text" name="search" id="search" onChange={Search} />
      <Card Infos={InfoSearch}/>
    </>
  );
}

export default App;
