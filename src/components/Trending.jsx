import React, { useState } from 'react';
import btc from '../assets/btc.png';
import usdt from '../assets/usdt.png';
import recent from '../assets/recent.png';
import usdc from '../assets/usdc.png';
import dogecoin from '../assets/dogecoin.png';
import bnb from '../assets/bnb.png';
import matic from '../assets/matic.png';
import chartUp from '../assets/chartUp.png';
import ReactSwitch from 'react-switch';

import Rate from './cmc-table/Rate';
import TrendingCard from './TrendingCard';

const styles = {
  trendingWrapper: 'mx-auto mt-20 max-w-screen-2xl px-[80px] position-fixed',
  h1: 'text-3xl text-black dark:text-white',
  flexCenter: 'inline md:flex items-center ',
};

// flexCenter: 'flex items-center

const trendingData = [
  {
    number: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: btc,
    image:
      'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
    isIncrement: false,
    rate: '-2.34%',
  },
  {
    number: 2,
    symbol: 'USDT',
    name: 'Tether',
    icon: usdt,
    image:
      'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
    isIncrement: false,
    rate: '-1.83%',
  },
  {
    number: 3,
    symbol: 'USDC',
    name: 'USD Coin',
    icon: usdc,
    image:
      'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
    isIncrement: true,
    rate: '2.22%',
  },
];

const trendingData2 = [
  {
    number: 1,
    symbol: 'Doge',
    name: 'Dogecoin',
    icon: dogecoin,
    image:
      'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6636.svg',
    isIncrement: true,
    rate: '+4.04%',
  },
  {
    number: 2,
    symbol: 'Bnb',
    name: 'BNB',
    icon: bnb,
    image:
      'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
    isIncrement: true,
    rate: '+5.12%',
  },
  {
    number: 3,
    symbol: 'Matic',
    name: 'Polygon',
    icon: matic,
    image:
      'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
    isIncrement: true,
    rate: '2.22%',
  },
];

const Trending = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="text-white">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Today's Cryptocurrency Prices by Marketcap
          </h1>

          <div className="flex">
            <p className="text-gray-400">Highlights &nbsp;</p>
            <ReactSwitch
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
          </div>
        </div>
        <br />

        <div className="flex">
          <p className="text-gray-400">
            The global crypto market cap is $1.74T, a &nbsp;{' '}
          </p>
          <span>
            <Rate isIncrement={true} rate="3.57%" />
          </span>
          <p>&nbsp; increase over the last day.</p>
        </div>
        <br />

        <div className={styles.flexCenter}>
          <TrendingCard
            title="Trending Coins"
            icon={recent}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Top Gainers"
            icon={chartUp}
            trendingData={trendingData2}
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
