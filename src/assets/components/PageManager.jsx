export default function PageManager({
  currentPage,
  setCurrentPage,
  setStatus,
}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <button
          className="btn btn-primary text-2xl m-5"
          onClick={() => {
            if (currentPage === 1) return null;
            setCurrentPage((prev) => prev - 1);
            setStatus("Status");
          }}
        >
          Previous Page
        </button>
        <h1>Page: {currentPage}</h1>
        <button
          className="btn btn-primary text-2xl m-5"
          onClick={() => {
            if (currentPage === 200) return null;
            setCurrentPage((prev) => prev + 1);
            setStatus("Status");
          }}
        >
          Next Page
        </button>
      </div>
    </>
  );
}
