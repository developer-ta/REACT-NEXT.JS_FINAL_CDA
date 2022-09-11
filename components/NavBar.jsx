/* -------------------------------------------------------------------------- */
/*                                   import                                   */
/* -------------------------------------------------------------------------- */

import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';
import { HomeIcon, UserIcon } from '@heroicons/react/outline';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaConciergeBell,
  FaHandHoldingUsd,
  FaChild,
  FaPizzaSlice,
  FaUserPlus,
} from 'react-icons/fa';
import { ImUsers, ImManWoman } from 'react-icons/im';

import { GiFullPizza, GiCakeSlice, GiHamburger } from 'react-icons/gi';
import { BsTelephoneInbound } from 'react-icons/bs';

/* -------------------------------------------------------------------------- */
/*                                    react                                   */
/* -------------------------------------------------------------------------- */

export default function NavBar() {
  return (
    <>
      <nav
        className=' flex w-[99.9%]  sticky top-0  h-20 m-0 flex-row justify-center text-center z-20 overflow-hidden bg-gradient-to-r from-slate-900  to-cyan-900 text-stone-100  shadow-slate-500 shadow-sm pt-3
'
      >
        {/*   bg-gradient-to-tl from-purple-300 to-pink-400 text-red-600 rounded-md */}
        <div className='w-[90%] h-full '>
          <ul className='flex flex-row justify-around text-white align-center  pt-1 h-full'>
            <li className='group'>
              <HomeIcon className='h-9 group-hover:animate-bounce' />
              <p className='text-sm active:scale-105'>Home</p>
            </li>
            <li className='group flex-col flex justify-center items-center  '>
              <GiFullPizza className='w-9 h-9 group-hover:animate-bounce' />
              <p className='text-sm active:scale-105'>pizza</p>
            </li>{' '}
            <li className='group flex-col flex justify-center items-center '>
              <GiHamburger className='w-9 h-9 group-hover:animate-bounce' />
              <p className='text-sm active:scale-105'>burger</p>
            </li>{' '}
            <li className='group flex-col flex justify-center items-center '>
              <BsTelephoneInbound className='w-9 h-9 group-hover:animate-bounce' />
              <p className='text-sm active:scale-105'>contact</p>
            </li>{' '}
            <li className='group flex-col flex justify-center items-center '>
              <FaUserPlus className='w-9 h-9 group-hover:animate-bounce' />
              <p className='text-sm active:scale-105'>s'inscrire</p>
            </li>{' '}
            <li className='group'>
              <UserIcon className='h-9 group-hover:animate-bounce' />
              <p className='text-sm active:scale-105'>admin</p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
