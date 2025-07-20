import { useEffect } from "react";

export default function RickAndMorty({
  characters,
  setCharacters,
  // numOfCharacters,
  setNumOfCharacters,
  setAllCharacters,
  currentPage,
}) {
  useEffect(() => {
    const forFetching = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}`
        );
        const data = await response.json();
        setNumOfCharacters(data.info.count);
        setCharacters(data.results);
        setAllCharacters(data.results);
        console.log(data.results);
      } catch (e) {
        console.log(e);
      }
    };

    forFetching();
  }, [currentPage]);

  return (
    <div>
      <div className="text-center text-4xl my-2 font-mono">
        {/* <h1>Number Of Characters in the Show: {numOfCharacters} </h1> */}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 place-items-center text-center gap-5 bg-gradient-to-br from-cyan-200 via-cyan-300 to-cyan-400 py-5 pt-20">
        {characters.map((c) => (
          <div className="bg-white/80  rounded-2xl shadow-lg mt-5 hover:ring-1 hover:ring-cyan-900 hover:scale-105 transition-all duration-200 ">
            <img src={c.image} alt={c.name} className="rounded-t-2xl" />
            <h1 className="text-black">{c.name}</h1>
            <h1 className="text-black">
              {c.status} {c.status === "Dead" ? "💀" : null}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
