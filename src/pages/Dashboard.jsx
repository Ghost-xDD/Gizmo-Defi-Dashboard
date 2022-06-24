import React from 'react';
import eth from '../assets/eth.png';
import bnb from '../assets/bnb.png';
import avalanche from '../assets/avalanche.png';
import BalanceRow from '../components/BalanceRow';

const Ethereum = 'Ethereum';
const balance = '$200';
const BSC = 'Bsc';
const Avalanche = 'Avalanche';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="ml-10 mt-20">
          <h4 className="text-gray-300">Net Worth</h4>
          <h2 className="text-gray-300 font-bold text-3xl">$16,883.05</h2>
          <h5 className="text-gray-300">Assets: $16,883.05</h5>
        </div>

        <div className="mt-10 ml-10">
          <h3 className="text-gray-300">Networks</h3>

          <div className="flex sm:flex-nowrap  ">
            <BalanceRow
              logo={eth}
              name={Ethereum}
              balance={balance}
              className="text-3xl"
            />
            <BalanceRow logo={bnb} name={BSC} balance={balance} />
            <BalanceRow logo={avalanche} name={Avalanche} balance={balance} />
            <br />
            <BalanceRow logo={avalanche} name={Avalanche} balance={balance} />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
