import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaConciergeBell,
  FaHandHoldingUsd,
} from 'react-icons/fa';

import { ImUsers, ImManWoman } from 'react-icons/im';
import { MdOutlineLocalDrink } from 'react-icons/md';
import { GiFullPizza, GiCakeSlice } from 'react-icons/gi';
import Link from 'next/link';

export default function ProductCart() {
  const [promo, setpromo] = useState([]);
  return (
    <>
      <div className=' w-full '>
        <Image
          layout='responsive'
          width='100%'
          height='85%'
          objectFit='cover'
          alt='/'
          src='/assets/fernando-andrade-_P76trHTWDE-unsplash.jpg'
          className=''
        />
      </div>
      <div className='flex flex-col mb-1 p-2 justify-center items-center '>
        <h1 className=' text-xs'>titre</h1>
        <h2 className=' text-xs'>ProductCart</h2>
        <span className='icon  flex  items-center justify-center sm:w-[80%]  '>
          <FaConciergeBell className='text-yellow-300 mr-1 group-hover:animate-bounce' />
          <p>order</p>
        </span>
      </div>
      {promo ? (
        ''
      ) : (
        <span className='icon  flex flex-row w-[90%] text-center bg-green-600 '>
          bon plane {promo} %
        </span>
      )}
    </>
  );
}
