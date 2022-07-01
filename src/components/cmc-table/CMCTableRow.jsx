import More from '../../assets/svg/more';
import Star from '../../assets/svg/star';
import Rate from './Rate';

import CoinNameRow from '../CoinNameRow';

const styles = {
  tableRow: 'text-black dark:text-white border-b border-gray-800 text-[0.93rem] ',
};

const CMCTableRow = ({
  starNum,
  coinName,
  coinSymbol = '---',
  coinIcon,
  showBuy,
  hRate = '---',
  dRate = '---',
  hRateIsIncrement,
  dRateIsIncrement,
  price = '---',
  marketCapValue = '---',
  volumeCryptoValue = '---',
  volumeValue = '---',
  circulatingSupply = '---',
}) => {
  const graphImages = [
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6636.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5805.svg',
  ];

  const getRandomGraph = () => {
    const rndInt = Math.floor(Math.random() * 10) + 1;
    return graphImages[rndInt];
  };

  const formatNum = (num) => {
    return Number(parseFloat(num).toFixed(2)).toLocaleString();
  };

  const applyIndicator = (hRate) => {
    if (hRate > 0) {
      return (
        <Rate isIncrement={hRateIsIncrement} rate={`+${formatNum(hRate)}%`} />
      );
    } else {
      return <Rate isIncrement={null} rate={`${formatNum(hRate)}%`} />;
    }
  };

  return (
    <tbody className={styles.tableRow}>
      <tr>
        <td>
          <Star />
        </td>
        <td>{starNum}</td>

        {coinIcon && coinIcon ? (
          <td className="cursor-pointer text-black dark:text-white">
            <CoinNameRow name={coinName} icon={coinIcon} />
          </td>
        ) : (
          <></>
        )}

        <td className="cursor-pointer text-black dark:text-white">
          <p>${formatNum(price)}</p>
        </td>
        <td>{applyIndicator(hRate)}</td>
        {/* <td>
          <Rate isIncrement={dRateIsIncrement} rate={`${formatNum(dRate)}%`} />
        </td> */}

        <td>
          <div>
            <p>${formatNum(marketCapValue)}</p>
          </div>
        </td>

        <td>
          <div>
            <p>{formatNum(volumeValue)}</p>
            <p className="text-gray-400">
              {formatNum(volumeCryptoValue)} {coinSymbol}
            </p>
          </div>
        </td>

        <td>
          <div>
            <p>{formatNum(circulatingSupply)}</p>
          </div>
        </td>

        <td>
          <img src={getRandomGraph()} width={150} height={60} alt="graph" />
        </td>

        <td>
          <More />
        </td>
      </tr>
    </tbody>
  );
};

export default CMCTableRow;
