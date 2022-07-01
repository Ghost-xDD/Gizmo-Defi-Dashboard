import { useContext } from 'react';
import { CoinMarketContext, CoinMarketProvider } from '../contexts/CoinContext';

const styles = {
  modalContent: 'ml-16 bg-white rounded-lg p-10 w-max w-3/4',
  input: 'w-full p-2 border rounded-lg mb-5 border-gray-600/50 outline-none',
  button: 'bg-[#1E4DB7] p-2 px-5 rounded-lg text-white hover:opacity-50',
  label: 'font-bold text-2xl mb-8',
};

const Swap = () => {
  const {
    mint,
    amount,
    setAmount,
    coins,
    loadingCoins,
    fromToken,
    setFromToken,
    toToken,
    setToToken,
  } = useContext(CoinMarketContext);

  return (
    <div className="container w-full mx-auto">
      <div className={styles.modalContent}>
        <div className="flex items-center justify-between">
          <p className={styles.label}>Swap Your Crypto</p>
        </div>
        <div className="mb-5">
          <label htmlFor="fromToken" className="block mb-2 ml-2">
            From
          </label>
          <select
            name="fromToken"
            className={styles.input}
            placeholder="Token to swap"
            onChange={(e) => setFromToken(e.target.value)}
            value={fromToken}
          >
            {coins.map((coin) => {
              if (!loadingCoins) {
                return (
                  <option key={coin.id} value={coin.attributes.name}>
                    {coin.attributes.name}
                  </option>
                );
              }
            })}
            <option value="ETH">ETH</option>
          </select>
          <label htmlFor="fromToken" className="block mb-2 ml-2">
            To
          </label>
          <select
            name="toToken"
            className={styles.input}
            placeholder="Token to swap"
            onChange={(e) => setToToken(e.target.value)}
            value={toToken}
          >
            {coins.map((coin) => {
              if (!loadingCoins) {
                return (
                  <option key={coin.id} value={coin.attributes.name}>
                    {coin.attributes.name}
                  </option>
                );
              }
            })}
          </select>
          <label htmlFor="amount" className="block mb-2 ml-2">
            Amount
          </label>
          <input
            name="amount"
            className={styles.input}
            placeholder="Token amount to swap"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button className={styles.button} onClick={mint}>
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swap;
