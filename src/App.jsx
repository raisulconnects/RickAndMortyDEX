import { useState } from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import RickAndMorty from "./assets/components/rickandmorty";

function App() {
  const [characters, setCharacters] = useState([]);
  const [numOfCharacters, setNumOfCharacters] = useState(0);
  const [allCharacters, setAllCharacters] = useState([]);

  return (
    <>
      <Navbar
        characters={characters}
        setCharacters={setCharacters}
        allCharacters={allCharacters}
      />
      <RickAndMorty
        characters={characters}
        setCharacters={setCharacters}
        numOfCharacters={numOfCharacters}
        setNumOfCharacters={setNumOfCharacters}
        setAllCharacters={setAllCharacters}
      />
    </>
  );
}

export default App;
