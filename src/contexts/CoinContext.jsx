import { createContext, useState, useEffect } from 'react';
import { useMoralis, useMoralisQuery } from 'react-moralis';

import {
  dogeAbi,
  usdcAbi,
  daiAbi,
  tetherAbi,
  linkAbi,
  dogeAddress,
  linkAddress,
  daiAddress,
  usdcAddress,
  tetherAddress,
} from '../../lib/constants';

export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({ children }) => {
  const { isAuthenticated, user, Moralis } = useMoralis();

  const {
    data: coins,
    error,
    isLoading: loadingCoins,
  } = useMoralisQuery('Coins');
  const [currentAccount, setCurrentAccount] = useState('');
  const [openBuyCryptoModal, setOpenBuyCryptoModal] = useState(false);
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('Dai');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      const account = user.get('ethAddress');
      setCurrentAccount(account);
    }
  }, [isAuthenticated]);

  const getContractAddress = () => {
    if (fromToken === 'Dai') return daiAddress;
    if (fromToken === 'DogeCoin') return dogeAddress;
    if (fromToken === 'Link') return linkAddress;
    if (fromToken === 'Usdc') return usdcAddress;
    if (fromToken === 'Tether') return tetherAddress;
  };

  const getToAddress = () => {
    if (toToken === 'Dai') return daiAddress;
    if (toToken === 'DogeCoin') return dogeAddress;
    if (toToken === 'Link') return linkAddress;
    if (toToken === 'Usdc') return usdcAddress;
    if (toToken === 'Tether') return tetherAddress;
  };

  const getToAbi = () => {
    if (toToken === 'Dai') return daiAbi;
    if (toToken === 'DogeCoin') return dogeAbi;
    if (toToken === 'Link') return linkAbi;
    if (toToken === 'Usdc') return usdcAbi;
    if (toToken === 'Tether') return tetherAbi;
  };

  const mint = async () => {
    try {
      if (fromToken === 'ETH') {
        if (!isAuthenticated) return;
        await Moralis.enableWeb3();
        const contractAddress = getToAddress();
        const abi = getToAbi();

        let options = {
          contractAddress: contractAddress,
          functionName: 'mint',
          abi: abi,
          params: {
            to: currentAccount,
            amount: Moralis.Units.Token(amount),
          },
        };
        sendEth();
        const transactions = await Moralis.executeFunction(options);
        const receipt = await transactions.wait(4);
        console.log(receipt);
      } else {
        swapTokens()
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const swapTokens = async () => {
    try {
      if (!isAuthenticated) return;
      await Moralis.enableWeb3();

      if (fromToken === toToken) return alert('You cannot swap the same token'); //edge case

      const fromOptions = {
        type: 'erc20',
        amount: Moralis.Units.Token(amount, '18'),
        receiver: getContractAddress(),
        contractAddress: getContractAddress(),
      };

      const toMintOptions = {
        contractAddress: getToAddress(),
        functionName: 'mint',
        abi: getToAbi(),
        params: {
          to: currentAccount,
          amount: Moralis.Units.Token(amount, '18'),
        },
      };
      let fromTransaction = await Moralis.transfer(fromOptions);
      let toMintTransaction = await Moralis.executeFunction(toMintOptions);
      let fromReceipt = await fromTransaction.wait();
      let toReceipt = await toMintTransaction.wait();
      console.log(fromReceipt);
      console.log(toReceipt);
    } catch (error) {
      console.error(error.message);
    }
  };

  const sendEth = async () => {
    if (!isAuthenticated) return;
    const contractAddress = getToAddress();

    let options = {
      type: 'native',
      amount: Moralis.Units.ETH('0.01'),
      receiver: contractAddress,
    };
    const transactions = await Moralis.transfer(options);
    const receipt = await transactions.wait();
    console.log(receipt);
  };

  const openModal = () => {
    setOpenBuyCryptoModal(true);
  };

  // const getTopTwentyCoins = async () => {
  //   try {
  //     const res = await fetch('/api/getTopTwenty');
  //     const data = await res.json();
  //     return data.data.data;
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };
  return (
    <CoinMarketContext.Provider
      value={{
        openBuyCryptoModal,
        setOpenBuyCryptoModal,
        fromToken,
        toToken,
        setFromToken,
        setToToken,
        amount,
        setAmount,
        mint,
        openModal,
        coins,
        loadingCoins,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  );
};
