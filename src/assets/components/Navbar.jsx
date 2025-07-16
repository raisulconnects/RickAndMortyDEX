export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Rick & Morty DEX</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Status</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a onClick={() => console.log("Alive")}>Alive</a>
                  </li>
                  <li>
                    <a>Dead</a>
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
