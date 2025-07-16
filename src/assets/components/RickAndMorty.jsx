import { useEffect } from "react";

export default function RickAndMorty({
  characters,
  setCharacters,
  numOfCharacters,
  setNumOfCharacters,
}) {
  useEffect(() => {
    const forFetching = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character/?page=1"
        );
        const data = await response.json();
        setNumOfCharacters(data.info.count);
        setCharacters(data.results);
        console.log(data.results);
      } catch (e) {
        console.log(e);
      }
    };

    forFetching();
  }, []);

  return (
    <div>
      <div className="text-center text-4xl my-10 ">
        <h1>Number Of Characters in the Show: {numOfCharacters} </h1>
      </div>
      <div className="grid grid-cols-3 place-items-center text-center gap-5 bg-gradient-to-br from-cyan-200 via-cyan-300 to-cyan-400 py-5">
        {characters.map((c) => (
          <div className="bg-white/80  rounded-2xl shadow-lg mt-5 hover:ring-1 hover:ring-cyan-900 hover:scale-105 transition-all duration-200 ">
            <img src={c.image} alt={c.name} className="rounded-t-2xl" />
            <h1>{c.name}</h1>
            <h1>
              {c.status} {c.status === "Dead" ? "💀" : null}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
