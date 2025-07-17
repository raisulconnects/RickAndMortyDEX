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
            <p className="text-black">
              <button
                className="btn bg-black text-white border-black"
                onClick={() => {
                  window.open(
                    "https://github.com/raisulconnects",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                <svg
                  aria-label="GitHub logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  ></path>
                </svg>
                My GitHub
              </button>
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
