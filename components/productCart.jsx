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

export default function ProductCart() {
  const [promo, setpromo] = useState([]);
  return (
    <div className='uppercase text-center rounded-t-xl overflow-hidden border group active:border-blue-300 shadow-md shadow-slate-50 hover:shadow-lg hover:scale-105 hover:shadow-slate-100 active:shadow-slate-100 flex flex-col flex-wrap justify-center mb-7 w-[47%]'>
      <div className=' w-full'>
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
      <div className='flex flex-col mb-1 p-2 justify-center '>
        <h1 className=' text-xs'>titre</h1>
        <h2 className=' text-xs'>ProductCart</h2>
        <span className='icon  flex  items-center justify-center  '>
          <FaConciergeBell className='text-yellow-300 mr-1 group-hover:animate-bounce' />
          <p>order</p>
        </span>
      </div>
      {!promo ? <span className='icon  flex  text-center  '>bon plane {promo} %</span> : ''}
    </div>
  );
}
