import { useRef } from "react";

export default function Navbar({
  setCharacters,
  allCharacters,
  status,
  setStatus,
}) {
  const detailsRef = useRef();

  const handleClick = (filterFunc, statusText) => {
    const filtered = filterFunc(allCharacters);
    setCharacters(filtered);
    setStatus(statusText);

    // Close the details dropdown
    detailsRef.current.open = false;
  };

  return (
    <div className="fixed top-0 z-50 navbar bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-md">
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
            <details ref={detailsRef}>
              <summary>{status}</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a
                    onClick={() =>
                      handleClick(
                        (arr) => arr.filter((c) => c.status === "Alive"),
                        "Showing Alive Characters"
                      )
                    }
                    className="text-black"
                  >
                    Alive
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      handleClick(
                        (arr) => arr.filter((c) => c.status === "Dead"),
                        "Showing Dead Characters"
                      )
                    }
                    className="text-black"
                  >
                    Dead
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          About
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-black">Hey There!</h3>
            <p className="py-4 text-black">
              This project was built by <b>Raisul Islam</b> while learning
              React. It helped me practice API fetching, useEffect, and managing
              state using the Rick and Morty API. Big thanks to{" "}
              <b>Alexandre Santos</b> for creating and maintaining the free Rick
              and Morty API, making it easier for learners and developers to
              build projects while learning.
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>Close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}
