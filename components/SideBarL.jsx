/* -------------------------------------------------------------------------- */
/*                                   import                                   */
/* -------------------------------------------------------------------------- */

import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaConciergeBell,
  FaHandHoldingUsd,
} from 'react-icons/fa';
import { ImUsers, ImManWoman } from 'react-icons/im';
import { MdOutlineLocalDrink } from 'react-icons/md';
import { GiFullPizza, GiCakeSlice } from 'react-icons/gi';
import { FaChild, FaPizzaSlice } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setEventSlideL, reSetEventSlideL } from '../redux/featureData';
import SideBarLOption from './SideBarLOption';
import { useState } from 'react';
/* -------------------------------------------------------------------------- */
/*                                    react                                   */
/* -------------------------------------------------------------------------- */

export default function SideBarL() {
  const sideBarData = [
    { menu: 'menu adult', img: '/assets/img1.jpg' },
    { menu: 'menu enfent', img: '/assets/img2.jpg' },
    { menu: 'seul', img: '/assets/img3.jpg' },
    { menu: 'boissons', img: '/assets/img4.jpg' },
    { menu: 'dessert', img: '/assets/img5.jpg' },
  ];

  const [data, setSidebarData] = useState({ sideBarData });

  return (
    //   <div className='flex flex-row items-center w-[23%] outline outline-2 outline-slate-500 rounded-xl ml-2 shadow-lg   shadow-orange-300'>
    //     <h1 className='text-2xl text-orange-400 m-2'>pizza</h1>
    //     <div className=' flex w-[99.9%]  sticky  h-20 m-0 flex-row justify-center text-center z-30 overflow-hidden bg-gradient-to-r from-slate-900  to-cyan-900 text-stone-100  shadow-slate-500 shadow-sm pt-3'>
    //       <SideBarLOption />
    //       <SideBarLOption />
    //     </div>
    //   </div>
    // );
    <section className=" sectionSideBarL flex flex-col  sm:items-center sm:outline sm:outline-2 sm:outline-slate-500 rounded-md  top-[90%]   text-center z-30 sm:overflow-hidden sm:bg-gradient-to-r sm:from-cyan-900  sm:to-slate-900 sm:text-stone-100 sm:shadow-sm  sm:shadow-orange-300 sm:static sm:w-[29%] sm:z-0  ">
      <h1 className="text-sm text-orange-400 hidden sm:block sm:text-xl ">pizza</h1>
      <div className="phoneSlideBar sm:w-[99%] flex flex-col pt-1 sm:flex-col  sm:items-center  ">
        {data.sideBarData.map((value, i) => (
          <SideBarLOption value={value} key={i} />
        ))}
      </div>
    </section>
  );
}
