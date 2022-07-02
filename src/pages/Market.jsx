import React from 'react';
import Trending from '../components/Trending';
import CMCTable from '../components/cmc-table/CMCTable';
import { useEffect, useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
  marginTop: '250px',
  textAlign: 'center',
};

const Market = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [color, setColor] = useState('#1E4DB7');

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="mt-10 max-w-screen-2xl dark:bg-main-dark-bg" />
      <Trending />

      <div className="mt-20">
        <CMCTable />
      </div>
    </div>
  );
};

export default Market;
