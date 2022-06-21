import React from 'react';
import { AiOutlineHome, AiOutlineLineChart } from 'react-icons/ai';
import { FiUpload } from 'react-icons/fi';
import { FaExchangeAlt } from 'react-icons/fa';
import { BsGear, BsPiggyBank } from 'react-icons/bs';
import { BiDroplet } from 'react-icons/bi';
import { GiChest } from 'react-icons/gi';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <AiOutlineHome />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'exchange',
        icon: <FaExchangeAlt />,
      },
      {
        name: 'market',
        icon: <AiOutlineLineChart />,
      },
      {
        name: 'transfer',
        icon: <FiUpload />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'pool',
        icon: <BiDroplet />,
      },
      {
        name: 'farm',
        icon: <BsGear />,
      },
      {
        name: 'save',
        icon: <BsPiggyBank />,
      },
      {
        name: 'vaults',
        icon: <GiChest />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const chatData = [
  {
    // image: avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    // image: avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    // image: avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    // image: avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];
