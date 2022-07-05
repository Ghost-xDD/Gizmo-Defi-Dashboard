# Gizmo-Defi-Dashboard

Gizmo is a defi dashboard powered by Moralis
## Features
- View Native balance across multiple testnets
- View NFTs on Rinkeby Testnet
- DEX Simulator (swap ERC20 tokens)
- Cryptocurrency Live Tracker

## Supported Testnets

- Ethereum (Rinkeby)
- Ethereum(Ropsten)
- Ethereum (Kovan)

- Polygon (Mumbai)

- BSC(Smart-chain)

- Avalanche (Fuji Testnet)



### Installation

**Note**: This React app was bootstrapped with [Vite.js](https://vitejs.dev/)


1. Install [Node.js](https://nodejs.org/en/) if you haven't already.

2. Clone this Repo

    Run the following command
    

        `git clone https://github.com/Ghost-xDD/Gizmo-Defi-Dashboard.git`

        `cd Gizmo-Defi-Dashboard`

3. Run `npm install` to install all the neccessary dependencies specified in the package.json.


### Quickstart
1. **Setup Environment Variables**


   - To start the Moralis server, you'll need your Moralis `serverUrl` and `appId`. You can get it from the [Moralis Website](https://moralis.io/)
   
       Then, you can create a .env file at the root of the folder with this format.

         `VITE_SERVER_URL=<your-moralis-server-url>`

         `VITE_APP_ID=<your-moralis-appId>`
   
   
   
   
   - To enable the Cryptocurrency live tracker, you need to get an API Url from [CoinGecko](https://www.coingecko.com/en/api/documentation) and save it in the .env file.
   
        **Example**

            `VITE_COINGECKO_URL=<your-coingeckoUrl>`
   
    **NOTE:** You have to prefix the .env variales with `VITE` so the app can be able to read it.
    
    
     
2. **Setup Smart Contracts**

      From your root folder, run `cd smart-contract`.
      
      Install the specified dependencies _(hardhat, ethers.js, openzepellin)_ with `npm install`.
      
      To run the smart contracts, you'll need your Moralis SpeedyNode URL and Private Key for Rinkeby _(or ethereum any other testnet)_
      
      **Example**
      
      `SPEEDY_NODE=<your-moralis-speedynode-url>`
      
      `ACCOUNT=<your-speedynode-privatekey>`
      



## Possible Issues

  - Vite currently has [conflicts](https://github.com/MoralisWeb3/react-moralis/issues/228) with the React-Moralis npm package when running `vite build` in production. An issue has been opened on the official react-moralis github page, and a fix is in progress when next the Moralis SDK is updated.
 


   
