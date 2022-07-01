import React from 'react';
import ChevronDown from '../../assets/svg/chevronDown';
import Info from '../../assets/svg/info';

const styles = {
  textIcon: 'flex items-center',
};

const CMCTableHeader = () => {
  return (
    <tbody>
      <tr>
        <th></th>
        <th className="flex items-center text-black dark:text-white">
          <b># &nbsp;</b>
          <ChevronDown />
        </th>
        <th className="text-black dark:text-white">Name</th>
        <th className="text-black dark:text-white">Price</th>
        <th className="text-black dark:text-white">24h %</th>
        {/* <th>7d %</th> */}
        <th>
          <div className={styles.textIcon}>
            <p className="mr-2 text-black dark:text-white">Market Cap</p>
            <Info />
          </div>
        </th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr-2 text-black dark:text-white">Volume</p>
            <Info />
          </div>
        </th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr-2 text-black dark:text-white">
              Circulating Supply
            </p>
            <Info />
          </div>
        </th>
        <th className="text-black dark:text-white">Last 7 days</th>
      </tr>
    </tbody>
  );
};

export default CMCTableHeader;
