import React from 'react';

const BalanceRow = ({ logo, name, balance }) => {
  return (
    <div className="container">
      <div className="flex items-center  border-solid border-2 border-blue-600 mr-2 mb-2 rounded-md justify-between bg-zinc-800 h-16 ">
        <div className="flex items-center">
          <img
            src={logo}
            width={45}
            height={20}
            alt="logo"
            className="pr-1 pl-1 rounded-full"
          />
          <h3 className="px-1 text-gray-300 font-bold">{name}</h3>
        </div>
        <div>
          <h4 className="text-gray-300 pr-1">{balance}</h4>
        </div>
      </div>
    </div>
  );
};

export default BalanceRow;
