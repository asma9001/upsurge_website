import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center bg-black items-center gap-3 mt-12">
      
      {/* Previous */}
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100 disabled:opacity-50"
      >
        <FiChevronLeft />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition
            ${
              currentPage === page
                ? "bg-indigo-600 text-white"
                : "border border-gray-300 text-gray-600 hover:bg-gray-100"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() =>
          setCurrentPage((p) => Math.min(p + 1, totalPages))
        }
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100 disabled:opacity-50"
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
