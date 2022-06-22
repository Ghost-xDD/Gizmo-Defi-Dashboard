import React from 'react';
import fire from '../assets/fire.png';
import btc from '../assets/btc.png';
import usdt from '../assets/usdt.png';
import gainers from '../assets/gainers.png';
import recent from '../assets/recent.png';
import ReactSwitch from 'react-switch';
// import Rate from './cmc-table/Rate';
// import TrendingCard from './TrendingCard';

const styles = {
  trendingWrapper: 'mx-auto max-w-screen-2xl px-[80px]',
  h1: 'text-3xl text-white',
  flexCenter: 'flex-items-center',
};

const trendingData = [
    {
        number: 1,
        symbol: 'BTC',
        name: 'Bitcoin',
        icon: btc,
        isIncrement: true,
        rate: '2.34%',
      },
      {
        number: 2,
        symbol: 'USDT',
        name: 'Tether',
        icon: usdt,
        isIncrement: false,
        rate: '9.23%',
      },
      {
        number: 3,
        symbol: 'BTC',
        name: 'Bitcoin',
        icon: btc,
        isIncrement: true,
        rate: '2.22%',
      },
]

const Trending = () => {
    const [checked, setChecked] = useState(false)

  return <div>Trending</div>;
};

export default Trending;
