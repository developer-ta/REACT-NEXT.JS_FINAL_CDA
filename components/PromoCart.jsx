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

export default function PromoCart() {
  const [promo, setpromo] = useState(10);
  console.log('promo: ', promo);

  return (
    <div className=" uppercase w-[45%] relative text-center rounded-t-xl overflow-hidden border group active:border-blue-300 shadow-md shadow-slate-50 hover:shadow-lg hover:scale-105 hover:shadow-slate-100 active:shadow-slate-100 flex flex-col  justify-center mb-7 sm:w-[30%] lg:w-[21%] md:w-[29%] ">
      <div className=" w-full ">
        <Image
          layout="responsive"
          width="100%"
          height="85%"
          objectFit="cover"
          alt="/"
          src="/assets/img1.jpg"
          className=""
        />
      </div>
      <div className="flex flex-col mb-1 p-2 justify-center items-center ">
        <h1 className=" text-xs">titre</h1>
        <h2 className=" text-xs">ProductCart</h2>
        <p className="icon   items-center justify-center sm:w-[80%]  ">
          <FaConciergeBell className="text-yellow-300 mr-1 group-hover:animate-bounce" />
          <span>order</span>
        </p>
      </div>
      {promo <= 10 ? (
        <span
          className={`absolute text-base font-bold right-3 top-[4%]	 bg-green-600/90 p-[3px] rounded-full ${
            (promo === 0 || !promo) && 'hidden'
          }`}
        >
          -{promo}%
        </span>
      ) : (
        <p
          className={`absolute flex flex-col justify-around items-end right-1 top-[8%] 	w-[100%] h-[11%] sm:h-[13%] ${
            (promo === 0 || !promo) && 'hidden'
          }`}
        >
          <span className=" bg-green-600/70 rounded-full pl-1 pr-1 mb-1 text-sm ">bon plane </span>{' '}
          <span className="font-bold  bg-sky-500/80 rounded-full w-[30%]  md:w-[23%] lg:w-[30%] xl:w-[20%]">
            -{promo} %
          </span>
        </p>
      )}
    </div>
  );
}
