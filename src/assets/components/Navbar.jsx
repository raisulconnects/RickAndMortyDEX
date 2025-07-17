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
  );
}
