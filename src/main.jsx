import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoralisProvider } from 'react-moralis';

import './index.css';

import { ContextProvider } from './contexts/ContextProvider';
import { CoinMarketProvider } from './contexts/CoinContext';

// import { CoinMarketProvider } from './contexts/CoinContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl={import.meta.env.VITE_SERVER_URL}
      appId={import.meta.env.VITE_APP_ID}
    >
      <ContextProvider>
        <CoinMarketProvider>
          <App />
        </CoinMarketProvider>
      </ContextProvider>
    </MoralisProvider>
  </React.StrictMode>
);
