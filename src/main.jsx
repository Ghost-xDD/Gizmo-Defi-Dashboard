import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoralisProvider } from 'react-moralis';

import './index.css';

import { ContextProvider } from './contexts/ContextProvider';
import { NotificationProvider } from 'web3uikit';
// import { CoinMarketProvider } from './contexts/CoinContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoralisProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </MoralisProvider>
  </React.StrictMode>
);
