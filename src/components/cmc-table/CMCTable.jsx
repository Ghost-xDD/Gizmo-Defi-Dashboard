import { useState, useContext, useEffect, useCallback } from 'react';
import CMCTableHeader from './CMCTableHeader';
import btc from '../../assets/btc.png';
import { CoinMarketContext } from '../../contexts/CoinContext';
// import

const CMCTable = () => {
  let { getTopTwentyCoins } = useContext(CoinMarketContext);
  let [coinData, setCoinData] = useState(null);

  useEffect(() => {
    setData();
  }, []);

  const setData = useCallback(async () => {
    try {
      let apiResponse = await getTopTwentyCoins();
      let filteredResponse = [];

      for (let i = 0; i < apiResponse.length; i++) {
        const element = apiResponse[i];

        if (element.cmc_rank <= 20) filteredResponse.push(element);
      }

      setCoinData(filteredResponse);
    } catch (error) {
      console.log(error.message);
    }
  }, [getTopTwentyCoins]);
  console.log(coinData);

  return (
    <div className="text-white font-bold px-[80px]">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
          <CMCTableHeader />

          {coinData && coinData ? (
            coinData.map((coin, index) => {
              return (
                <CMCTableRow
                  key={index}
                  starNum={coin.cmc_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={btc}
                  showBuy={true}
                  hRate={coin.quote.USD.percent_change_24h}
                  dRate={coin.quote.USD.percent_change_7d}
                  hRateIsIncrement={true}
                  price={coin.quote.USD.price}
                  marketCapValue={coin.quote.USD.market_cap}
                  volumeCryptoValue={coin.quote.USD.volume_24h}
                  volumeValue={coin.total_supply}
                  circulatingSupply={coin.circulating_supply}
                />
              );
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  );
};

export default CMCTable;
