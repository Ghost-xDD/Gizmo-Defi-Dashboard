import React from 'react';

const ComingSoon = () => {
  return (
    <div className="container mt-32  w-full md:w-9/12 md:mt-16 bg-slate-200 rounded-md md:mx-auto">
      <div className="text-center font-bold">
        <h1 className="mt-4 pt-10 text-2xl">COMING SOON</h1>
        <p className="mt-4 pt-4">
          This page is still under Construction. Would be updated later.
        </p>
        <button className="mt-4  mb-10 bg-[#1E4DB7] p-2 px-5 rounded-lg text-white hover:opacity-50">
          Continue Exploration
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
