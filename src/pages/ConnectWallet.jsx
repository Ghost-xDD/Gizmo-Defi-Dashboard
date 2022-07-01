import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConnectButton } from 'web3uikit';
import { SiBlockchaindotcom } from 'react-icons/si';
import { AiOutlineUser } from 'react-icons/ai';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const ConnectWallet = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) return;

    navigate('/');
  }, [isAuthenticated]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full bg-darkgray  h-24">
        <div className="text-white text-2xl pl-[40px] flex items-center">
          <SiBlockchaindotcom /> &nbsp; <span>Gizmo</span>
        </div>
        <div className="text-white text-4xl pr-[40px] cursor-pointer">
          <AiOutlineUser />
        </div>
      </div>

      <div className="pt-12 flex flex-col items-center bg-secondary-dark-bg h-[89vh]">
        <div className="text-2xl text-sky-800 text-center">
          <p className="ml-[100px]">
            <SiBlockchaindotcom />
          </p>
          &nbsp; &nbsp;
          <p className="font-bold text-white text-2xl">Welcome to Gizmo</p>
        </div>
        &nbsp;
        <span className="text-white">
          Get started by connecting your wallet
        </span>
        <div className="mt-6 text-darkgray">
          <ConnectButton signingMessage="Connect Wallet to Gizmo" />
        </div>
        {/* Next */}
        <div className="pt-20">
          <h4 className="text-2xl text-white text-center font-bold mb-2">
            App Features
          </h4>
          <ul>
            <li className="flex items-center text-gray-400 mb-2">
              <IoIosCheckmarkCircle className="text-sky-500 text-2xl" /> &nbsp;
              View Test Token Balance across multiple chains
            </li>
            <li className="flex items-center text-gray-400 mb-2">
              <IoIosCheckmarkCircle className="text-sky-500 text-2xl" />
              &nbsp; View NFTs Balance on Rinkeby Testnet
            </li>
            <li className="flex items-center text-gray-400 mb-2">
              <IoIosCheckmarkCircle className="text-sky-500 text-2xl" />
              &nbsp; DEX Simulator (Swap 6 tokens with ease)
            </li>
            <li className="flex items-center text-gray-400 mb-2">
              <IoIosCheckmarkCircle className="text-sky-500 text-2xl" />
              &nbsp; Live Tracker of Top 20 cryptocurrencies
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
