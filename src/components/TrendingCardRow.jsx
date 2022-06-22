import React from 'react';
import Rate from './cmc-table/Rate';

const styles = {
  trendingCardRow: 'flex items-center justify-between mb-4 text-[0.93rem]',
};

const TrendingCardRow = ({
  icon,
  number,
  symbol,
  name,
  isIncrement,
  rate,
  image,
}) => {
  return (
    <div className={styles.trendingCardRow}>
      <p className="opacity-40">{number}</p>
      <div className="w-full flex">
        <div className="mx-5">
          {icon && <img src={icon} width={20} height={20} />}
        </div>
        <p className="font-bold">
          {name}
          &nbsp;
          <span className="text-gray-400">{symbol}</span>
        </p>
      </div>

      <div className='w-full'>
        <img src={image} alt="sparkline" />
      </div>

      <div>
        <Rate isIncrement={isIncrement} rate={rate} />
      </div>
    </div>
  );
};

export default TrendingCardRow;
