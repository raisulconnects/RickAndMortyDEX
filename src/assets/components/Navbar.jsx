import { useState } from "react";

export default function Navbar({ setCharacters, allCharacters }) {
  const [status, setStatus] = useState("Status");

  // setStatus("Showing Alive Characters")

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a
            className="btn btn-ghost text-xl"
            onClick={() => window.location.reload()}
          >
            Rick & Morty DEX
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>{status}</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a
                      onClick={() => {
                        const aliveArr = allCharacters.filter(
                          (c) => c.status === "Alive"
                        );
                        setCharacters(aliveArr);
                        setStatus("Showing Alive Characters");
                      }}
                    >
                      Alive
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        const newArr = allCharacters.filter(
                          (c) => c.status === "Dead"
                        );
                        setCharacters(newArr);
                        setStatus("Showing Dead Characters");
                      }}
                    >
                      Dead
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
