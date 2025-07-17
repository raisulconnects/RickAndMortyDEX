export default function PageManager({
  currentPage,
  setCurrentPage,
  setStatus,
}) {
  return (
    <>
      <div className="flex justify-between items-center  bottom-0 left-0 w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg z-50">
        <button
          className="btn btn-primary text-1xl mx-5 my-2"
          onClick={() => {
            if (currentPage === 1) return null;
            setCurrentPage((prev) => prev - 1);
            setStatus("Status");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Previous Page
        </button>
        <h1>Page: {currentPage}</h1>
        <button
          className="btn btn-primary text-1xl mx-5 my-2"
          onClick={() => {
            if (currentPage === 42) return null;
            setCurrentPage((prev) => prev + 1);
            setStatus("Status");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Next Page
        </button>
      </div>
    </>
  );
}
