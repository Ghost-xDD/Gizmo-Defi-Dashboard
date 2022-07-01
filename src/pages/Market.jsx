import React from 'react';
import Trending from '../components/Trending';
import CMCTable from '../components/cmc-table/CMCTable';

const Market = () => {
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
