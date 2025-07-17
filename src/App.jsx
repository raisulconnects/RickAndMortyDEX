import { useState } from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import RickAndMorty from "./assets/components/RickAndMorty";

import PageManager from "./assets/components/PageManager";

function App() {
  const [characters, setCharacters] = useState([]);
  const [numOfCharacters, setNumOfCharacters] = useState(0);
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("Status");

  return (
    <>
      <Navbar
        characters={characters}
        setCharacters={setCharacters}
        allCharacters={allCharacters}
        status={status}
        setStatus={setStatus}
      />
      <RickAndMorty
        characters={characters}
        setCharacters={setCharacters}
        numOfCharacters={numOfCharacters}
        setNumOfCharacters={setNumOfCharacters}
        setAllCharacters={setAllCharacters}
        currentPage={currentPage}
      />
      <PageManager
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setStatus={setStatus}
      />
    </>
  );
}

export default App;
