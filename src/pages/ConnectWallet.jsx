import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import { ConnectButton } from 'web3uikit';
import { SiBlockchaindotcom } from 'react-icons/si';
import { BsWallet2 } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const ConnectWallet = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  // const { isAuthenticated, user } = useMoralis();

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    navigate('/dashboard');
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
          {/* <table className="table-fixed mx-[20px]">
            <thead>
              <tr>
                <th className="text-2xl text-white font-bold ">App Features</th>
              </tr>
            </thead>
            &nbsp;
            <tbody>
              <tr>
                <td className="flex items-center text-gray-400">
                  <IoIosCheckmarkCircle className="text-sky-500 text-2xl" />
                  &nbsp; View Test Token Balance across multiple chains
                </td>
              </tr>
              <tr>
                <td className="flex items-center text-gray-400">
                  <IoIosCheckmarkCircle className="text-sky-500 text-2xl" />
                  &nbsp; DEX (Swap tokens with ease)
                </td>
              </tr>
              <tr>
                <td className="flex items-center text-gray-400">
                  <IoIosCheckmarkCircle className="text-sky-500 text-2xl" />
                  &nbsp; Live Tracker of Top 20 cryptocurrencies
                </td>
              </tr>
              <tr>
                <td className="flex items-center text-gray-400">
                  <IoIosCheckmarkCircle className="text-sky-500 text-2xl" />
                  &nbsp; Dynamic Coin Page
                </td>
              </tr>
              <tr>
                <td className="flex items-center text-gray-400">
                  <IoIosCheckmarkCircle className="text-sky-500 text-2xl" />
                  &nbsp; Transfer ERC20 Tokens to any wallet
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
