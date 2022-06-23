import { createContext, useState, useEffect } from 'react';

export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({ children }) => {
  const getTopTwentyCoins = async () => {
    try {
      const res = await fetch('/api/getTopTwenty');
      const data = await res.json();
      return data.data.data;
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <CoinMarketContext.Provider value={{ getTopTwentyCoins }}>
      {children}
    </CoinMarketContext.Provider>
  );
};
