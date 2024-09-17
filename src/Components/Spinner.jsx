import React from 'react';
import './Spinner.css';
function Spinner() {
  return (
    <div className="flex items-center  justify-center">
      <div className="flex items-center justify-center mt-[200px]">
        <div className="spinner "></div>
        <div className="justify-center ">Loading..</div>
      </div>
    </div>
  );
}

export default Spinner;
