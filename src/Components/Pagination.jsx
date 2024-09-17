import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
      <div className="flex gap-x-4 justify-center w-11/12 max-w-[650px] py-2">
        <div className="flex ">
          {page > 1 && (
            <button
              className="border-2 border-slate-400 py-1 px-4 rounded-md"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
        </div>
        <div>
          {page < totalPages && (
            <button
              className="border-2 border-slate-400 py-1 px-4 rounded-md"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="font-bold text-sm ml-80 mt-2">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
