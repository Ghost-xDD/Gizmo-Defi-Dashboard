import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoralisProvider } from 'react-moralis';
import { NotificationProvider } from 'web3uikit';

import './index.css';

import { ContextProvider } from './contexts/ContextProvider';
// import { CoinMarketProvider } from './contexts/CoinContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoralisProvider>
      <NotificationProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>
);
