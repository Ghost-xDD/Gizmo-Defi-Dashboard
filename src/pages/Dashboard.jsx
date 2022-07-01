import React, { useState } from 'react';
import Moralis from 'moralis';
import { useEffect } from 'react';
import {
  useMoralis,
  useMoralisWeb3Api,
  useMoralisWeb3ApiCall,
} from 'react-moralis';
import { NFTBalance } from 'web3uikit';
import eth from '../assets/eth.png';
import bnb from '../assets/bnb.png';
import polygon from '../assets/polygon.png';
import avalanche from '../assets/avalanche.png';
import BalanceRow from '../components/BalanceRow';

const Ethereum = 'Ethereum(Rinkeby)';
const Ethereum2 = 'Ethereum(Ropsten)';
const Ethereum3 = 'Ethereum(Kovan)';
const Ethereum4 = 'Ethereum(Mainnet)';
const Mumbai = 'Mumbai';
const Bsc = 'BSC';
const Avalanche = 'Avalanche';
const staticData = '-----';
const BSC = 'BSC';
const Polygon = 'Polygon';

const Dashboard = () => {
  const Web3Api = useMoralisWeb3Api();
  const { isAuthenticated, user } = useMoralis();

  const userAddress = user?.get('ethAddress');

  const [mainnetBalance, setMainnetBalance] = useState('0');
  const [rinkebyBalance, setRinkebyBalance] = useState('0');
  const [ropstenBalance, setRopstenBalance] = useState('0');
  const [kovanBalance, setKovanBalance] = useState('0');
  const [mumbaiBalance, setMumbaiBalance] = useState('0');
  const [bscBalance, setBscBalance] = useState('0');
  const [avalancheBalance, setAvalancheBalance] = useState('0');

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
      fetchTokenBalances('mumbai'),
      fetchTokenBalances('0x61'),
      fetchTokenBalances('0xa869'),
    ]);

    const rinkebyBalance = balances[0];
    const kovanBalance = balances[1];
    const ropstenBalance = balances[2];
    const mainnetBalance = balances[3];
    const mumbaiBalance = balances[4];
    const bscBalance = balances[5];
    const avalancheBalance = balances[6];

    const mainnetBalanceEther = Moralis.Units.FromWei(mainnetBalance);
    const rinkebyBalanceEther = Moralis.Units.FromWei(rinkebyBalance);
    const kovanBalanceEther = Moralis.Units.FromWei(kovanBalance);
    const ropstenBalanceEther = Moralis.Units.FromWei(ropstenBalance);
    const mumbaiBalanceMatic = Moralis.Units.FromWei(mumbaiBalance);
    const bscBalanceBnb = Moralis.Units.FromWei(bscBalance);
    const avalancheBalanceAvax = Moralis.Units.FromWei(avalancheBalance);

    setMainnetBalance(mainnetBalanceEther);
    setRinkebyBalance(rinkebyBalanceEther);
    setRopstenBalance(ropstenBalanceEther);
    setKovanBalance(kovanBalanceEther);
    setMumbaiBalance(mumbaiBalanceMatic);
    setBscBalance(bscBalanceBnb);
    setAvalancheBalance(avalancheBalanceAvax);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchBalances();
      // nativeBalanceFetch();
    }
  }, [isAuthenticated]);

  return (
    <div className="dashboard">
      <div className="container">
        <div className="ml-10 mt-20 md:mt-16">
          <h4 className="dark:text-gray-300">Net Worth</h4>
          <h2 className="dark:text-gray-300 font-bold text-3xl">$2,053.05</h2>
          <h5 className="dark:text-gray-300">Assets: $2,053.05</h5>
        </div>

        <div className="mt-10 mx-10">
          <h3 className="dark:text-gray-300 font-bold">Networks</h3>
          &nbsp;
          {isAuthenticated ? (
            <div className="mb-10">
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
              </div>
              <div className="flex flex-wrap md:flex-nowrap">
                <BalanceRow
                  logo={polygon}
                  name={Mumbai}
                  balance={`${mumbaiBalance.slice(0, 10)} MATIC`}
                />
                <BalanceRow
                  logo={bnb}
                  name={Bsc}
                  balance={`${bscBalance.slice(0, 10)} BNB`}
                />
                <BalanceRow
                  logo={avalanche}
                  name={Avalanche}
                  balance={`${avalancheBalance.slice(0, 10)} AVAX`}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className=" mx-10">
          <h3 className="dark:text-gray-300 font-bold">NFTs</h3>
          <div className="w-full">
            <NFTBalance address={userAddress} chain="rinkeby" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
