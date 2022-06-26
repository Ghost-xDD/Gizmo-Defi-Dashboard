import React, { useState } from 'react';
import Moralis from 'moralis';
import { useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { ConnectButton, useNotification, NFTBalance } from 'web3uikit';
import eth from '../assets/eth.png';
import bnb from '../assets/bnb.png';
import polygon from '../assets/polygon.png';
import avalanche from '../assets/avalanche.png';
import BalanceRow from '../components/BalanceRow';
import { useNavigate } from 'react-router-dom';

const Ethereum = 'Ethereum(Rinkeby)';
const Ethereum2 = 'Ethereum(Ropsten)';
const Ethereum3 = 'Ethereum(Kovan)';
const Ethereum4 = 'Ethereum(Mainnet)';
const staticData = '-----';
const BSC = 'BSC';
const Polygon = 'Polygon';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useNotification();
  const Web3Api = useMoralisWeb3Api();
  const { isAuthenticated, user } = useMoralis();

  const userAddress = user?.get('ethAddress');

  const [mainnetBalance, setMainnetBalance] = useState('0');
  const [rinkebyBalance, setRinkebyBalance] = useState('0');
  const [ropstenBalance, setRopstenBalance] = useState('0');
  const [kovanBalance, setKovanBalance] = useState('0');

  const handleNewNotification = ({ type, title, message, position }) => {
    dispatch({
      type: type || 'info',
      message: message || '',
      title: title || 'New Notification',
      position: position || 'topR',
    });
  };

  const fetchTokenBalances = async (chain) => {
    const options = { chain, address: userAddress };
    const result = await Web3Api.account.getNativeBalance(options);
    console.log(result);
    return result.balance;
  };

  const fetchBalances = async () => {
    const balances = await Promise.all([
      fetchTokenBalances('rinkeby'),
      fetchTokenBalances('kovan'),
      fetchTokenBalances('ropsten'),
      fetchTokenBalances('mainnet'),
    ]);

    const rinkebyBalance = balances[0];
    const kovanBalance = balances[1];
    const ropstenBalance = balances[2];
    const mainnetBalance = balances[3];

    const mainnetBalanceEther = Moralis.Units.FromWei(mainnetBalance);
    const rinkebyBalanceEther = Moralis.Units.FromWei(rinkebyBalance);
    const kovanBalanceEther = Moralis.Units.FromWei(kovanBalance);
    const ropstenBalanceEther = Moralis.Units.FromWei(ropstenBalance);

    setMainnetBalance(mainnetBalanceEther);
    setRinkebyBalance(rinkebyBalanceEther);
    setRopstenBalance(ropstenBalanceEther);
    setKovanBalance(kovanBalanceEther);
  };

  useEffect(() => {
    if (isAuthenticated) {
      // const notificationData = {
      //   types: 'info',
      //   title: 'Wallet Connected Successfully',
      //   position: 'bottomR',
      // };

      // handleNewNotification(notificationData);

      fetchBalances();
    }
  }, [isAuthenticated]);

  return (
    <div className="dashboard">
      <div className="container">
        <div className="ml-10 mt-20">
          {/* <h4 className="text-gray-300">Net Worth</h4>
          <h2 className="text-gray-300 font-bold text-3xl">$16,883.05</h2>
          <h5 className="text-gray-300">Assets: $16,883.05</h5> */}
        </div>

        <div className="mt-10 mx-10">
          <h3 className="text-gray-300 font-bold">Networks</h3>
          &nbsp;
          {isAuthenticated ? (
            <div className="flex flex-wrap md:flex-nowrap">
              <BalanceRow
                logo={eth}
                name={Ethereum}
                balance={`${rinkebyBalance.slice(0, 8)} ETH`}
                className="text-3xl"
              />
              <BalanceRow
                logo={eth}
                name={Ethereum2}
                balance={`${ropstenBalance.slice(0, 8)} ETH`}
              />
              <BalanceRow
                logo={eth}
                name={Ethereum3}
                balance={`${kovanBalance.slice(0, 10)} ETH`}
              />
              <br />
              {/* <BalanceRow logo={avalanche} name={Avalanche} balance={balance} /> */}
              <br />
            </div>
          ) : (
            <></>
            // navigate('/connectwallet')
          )}
          <div className="flex">
            <BalanceRow logo={bnb} name={BSC} balance={staticData} />
            <BalanceRow logo={polygon} name={Polygon} balance={staticData} />
          </div>
        </div>

        <div className="mt-10 mx-10">
          <h3 className="text-gray-300 font-bold">NFTs</h3>
          <div className="w-full">
            <NFTBalance address={userAddress} chain="rinkeby" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
