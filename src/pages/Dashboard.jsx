import React from 'react';
import eth from '../assets/eth.png';
import bnb from '../assets/bnb.png';
import avalanche from '../assets/avalanche.png';
import polygon from '../assets/polygon.png';
import BalanceRow from '../components/BalanceRow';

const Ethereum = 'Ethereum';
const balance = '$200';
const BSC = 'Bsc';
const Avalanche = 'Avalanche';
const Polygon = 'Polygon';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="ml-10 mt-20">
          <h4 className="text-gray-300">Net Worth</h4>
          <h2 className="text-gray-300 font-bold text-3xl">$16,883.05</h2>
          <h5 className="text-gray-300">Assets: $16,883.05</h5>
        </div>

        <div className="mt-10 mx-10">
          <h3 className="text-gray-300 font-bold">Networks</h3>
          &nbsp;
          <div className="flex flex-wrap md:flex-nowrap">
            <BalanceRow
              logo={eth}
              name={Ethereum}
              balance={balance}
              className="text-3xl"
            />
            <BalanceRow logo={bnb} name={BSC} balance={balance} />
            <BalanceRow logo={polygon} name={Polygon} balance={balance} />
            <br />
            <BalanceRow logo={avalanche} name={Avalanche} balance={balance} />
            <br />
          </div>
          <div>
            <BalanceRow logo={avalanche} name={Avalanche} balance={balance} />
          </div>
        </div>

        <div className="mt-10 mx-10">
          <h3 className="text-gray-300 font-bold">NFTs</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
