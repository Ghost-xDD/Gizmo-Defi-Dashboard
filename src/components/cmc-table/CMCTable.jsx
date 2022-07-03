import { useState, useEffect } from 'react';
import CMCTableHeader from './CMCTableHeader';
import axios from 'axios';
import CMCTableRow from './CMCTableRow';
import ScaleLoader from 'react-spinners/ScaleLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
  marginTop: '250px',
  textAlign: 'center',
};

const CMCTable = () => {
  let [coinData, setCoinData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [color, setColor] = useState('#1E4DB7');

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios(import.meta.env.VITE_COINGECKO_URL, {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      });
      const coin = response.data;
      setCoinData(coin);
      setIsLoading(false);
      console.log(coin);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="text-white font-bold px-[40px]">
      <div className="mx-auto max-w-screen-2xl">
        {isLoading ? (
          <ScaleLoader
            color={color}
            loading={isLoading}
            cssOverride={override}
            size={20}
          />
        ) : (
          <table className="w-full">
            <CMCTableHeader />

            {coinData && coinData ? (
              coinData.map((coin, index) => {
                return (
                  <CMCTableRow
                    key={index}
                    starNum={coin.market_cap_rank}
                    coinName={coin.name}
                    coinSymbol={coin.symbol}
                    coinIcon={coin.image}
                    showBuy={true}
                    hRate={coin.price_change_percentage_24h}
                    dRate={coin.percent_change_7d}
                    hRateIsIncrement={true}
                    price={coin.current_price}
                    marketCapValue={coin.market_cap}
                    volumeCryptoValue={coin.total_volume}
                    volumeValue={coin.total_supply}
                    circulatingSupply={coin.circulating_supply}
                  />
                );
              })
            ) : (
              <></>
            )}
          </table>
        )}
      </div>
    </div>
  );
};

export default CMCTable;
