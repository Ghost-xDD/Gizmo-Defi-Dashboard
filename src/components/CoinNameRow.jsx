import btc from '../assets/btc.png';
import eth from '../assets/eth.png';
import usdc from '../assets/usdc.png';
import usdt from '../assets/usdt.png';
import xrp from '../assets/xrp.png';
import cardano from '../assets/cardano.png';
import terra from '../assets/terra.png';
import solana from '../assets/solana.png';
import bnb from '../assets/bnb.png';
import avalanche from '../assets/avalanche.png';
import shiba from '../assets/shiba.png';
import dai from '../assets/dai.png';
import tron from '../assets/tron.png';
import dogecoin from '../assets/dogecoin.png';
import wrapped from '../assets/wrapped.png';

const styles = {
  coinNameRow: 'flex items-center',
  buyButton:
    'bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50',
};

const CoinNameRow = ({ name, icon, clicked }) => {
  const coinIcon = () => {
    switch (name) {
      case 'Bitcoin':
        return (
          <img src={btc} className="rounded-full" width={20} height={20} />
        );
      case 'Ethereum':
        return (
          <img src={eth} className="rounded-full" width={20} height={20} />
        );
      case 'USD Coin':
        return (
          <img src={usdc} className="rounded-full" width={20} height={20} />
        );
      case 'BNB':
        return (
          <img src={bnb} className="rounded-full" width={20} height={20} />
        );
      case 'Tether':
        return (
          <img src={usdt} className="rounded-full" width={20} height={20} />
        );
      case 'XRP':
        return (
          <img src={xrp} className="rounded-full" width={20} height={20} />
        );
      case 'Dogecoin':
        return (
          <img src={dogecoin} className="rounded-full" width={20} height={20} />
        );
      case 'Cardano':
        return (
          <img src={cardano} className="rounded-full" width={20} height={20} />
        );
      case 'Terra':
        return (
          <img src={terra} className="rounded-full" width={20} height={20} />
        );
      case 'Solana':
        return (
          <img src={solana} className="rounded-full" width={20} height={20} />
        );
      case 'Binance Coin':
        return (
          <img src={solana} className="rounded-full" width={20} height={20} />
        );
      case 'Avalanche':
        return (
          <img
            src={avalanche}
            className="rounded-full"
            width={20}
            height={20}
          />
        );
      case 'Dai':
        return (
          <img src={dai} className="rounded-full" width={20} height={20} />
        );
      case 'TRON':
        return (
          <img src={tron} className="rounded-full" width={20} height={20} />
        );
      case 'Shiba Inu':
        return (
          <img src={shiba} className="rounded-full" width={20} height={20} />
        );
      case 'Wrapped Bitcoin':
        return (
          <img src={wrapped} className="rounded-full" width={20} height={20} />
        );
    }
  };

  return (
    <div className={styles.coinNameRow}>
      <div className="mr-3 flex" onClick={clicked}>
        <div className="mr-2">{coinIcon()}</div>
        {name}
      </div>

      <p>
        {name === 'Bitcoin' || name === 'Ethereum' || name === 'Tether' ? (
          <span className={styles.buyButton}>Buy</span>
        ) : (
          <></>
        )}
      </p>
    </div>
  );
};

export default CoinNameRow;
