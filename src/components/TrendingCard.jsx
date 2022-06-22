import React from 'react';
import MoreButton from './MoreButton';
import TrendingCardRow from './TrendingCardRow';

const styles = {
  trendingCard: 'w-full p-5 py-3 pb-0 bg-[#42464D] rounded-xl text-white mr-3',
  trendingCardWrapper: 'flex items-center justify-between',
};

const TrendingCard = ({ title, icon, trendingData }) => {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className="flex">
          {icon && <img src={icon} width={27} height={27} alt="icon" />}
          &nbsp;&nbsp;
          <p className="font-bold">{title}</p>
        </div>
        <MoreButton />
      </div>
      <br />

      {trendingData.map((item, i) => {
        return (
          <TrendingCardRow
            key={i}
            number={item.number}
            symbol={item.symbol}
            name={item.name}
            icon={item.icon}
            image={item.image}
            isIncrement={item.isIncrement}
            rate={item.rate}
          />
        );
      })}
    </div>
  );
};

export default TrendingCard;
