import React from 'react';

const styles = {
  modalContent: ' ml-16 bg-zinc-800 dark:bg-white rounded-lg p-10 w-max w-3/4',
  input: 'w-full p-2 border rounded-lg mb-5 border-gray-600/50 outline-none',
  button: 'bg-[#1E4DB7] p-2 px-5 rounded-lg text-white hover:opacity-50',
  label: 'font-bold text-2xl mb-8 text-white dark:text-black',
};

const TransferE = () => {
  return (
    <div className="container w-full">
      <div className={styles.modalContent}>
        <div className="flex items-center justify-between">
          <p className={styles.label}>Transfer ERC20 Token</p>
        </div>
        <div className="mb-5">
          <label
            htmlFor="address"
            className="block mb-2 ml-2 text-white dark:text-black"
          >
            Address
          </label>
          <input
            name="address"
            className={styles.input}
            placeholder="Receiver Address"
          />

          <label
            htmlFor="address"
            className="block mb-2 ml-2 text-white dark:text-black"
          >
            Asset
          </label>
          <select
            name="ercToken"
            className={styles.input}
            placeholder="Token to Send"
          >
            <option value="eth">ETH</option>
          </select>
          <label
            htmlFor="amount"
            className="block mb-2 ml-2 text-white dark:text-black"
          >
            Amount
          </label>
          <input
            name="amount"
            className={styles.input}
            placeholder="Amount to transfer"
          />

          <button className={styles.button}>Transfer</button>
        </div>
      </div>
    </div>
  );
};

export default TransferE;
