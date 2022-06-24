import React from 'react';

const BalanceRow = ({ logo, name, balance }) => {
  return (
    <div className="container">
      <div className="flex items-center  border-solid border-2 border-blue-600 mr-2 rounded-md justify-between bg-stone-800 h-16 ">
        <div className="flex items-center">
          <img src={logo} width={50} height={20} alt="logo" className="pr-1" />
          <h3 className="pr-1 text-gray-300">{name}</h3>
        </div>
        <div>
          <h4 className="text-gray-300">{balance}</h4>
        </div>
      </div>
    </div>
  );
};

export default BalanceRow;
