/* -------------------------------------------------------------------------- */
/*                                   import                                   */
/* -------------------------------------------------------------------------- */

import { useDispatch, useSelector } from 'react-redux';
import { set } from '../redux/featureData';
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

import { useState } from 'react';
/* -------------------------------------------------------------------------- */
/*                                    react                                   */
/* -------------------------------------------------------------------------- */

export default function SideBarLOption({ value }) {
  const { menu, img } = value;
  const data = useSelector((state) => state.data.event);

  const dispatch = useDispatch();
  //const [state, setstate] = useState(initialState);

  // const [state, setState] = useState(true);
  // function handleClick(params) {
  //   console.log(state);
  // }

  return (
    <div className=" sm:w-[87%]  sm:flex sm:flex-col sm:mb-4  " onClick={() => dispatch(set(menu))}>
      <div className="uppercase text-center rounded-xl overflow-hidden border  active:border-blue-300 shadow-md shadow-slate-50 hover:shadow-lg hover:scale-105 hover:shadow-slate-100 active:shadow-slate-100 flex flex-col flex-wrap   sm: mb-3 mt-1 sm:h-[70px] sm:min-w-min-[41%] sm:w-[97%] h-16 lg:min-h-[100px] lg:min-w-min-[41%]  ">
        <div className=" w-[36%]  rounded-xl overflow-hidden  sm:block sm:w-[51%] ">
          <Image
            layout="responsive"
            src={img}
            width="100%"
            height="98%"
            objectFit="cover"
            alt="/"
            className=""
          />
        </div>
        <h2 className=" text-[90%]  m-3  sm:text-[80%] sm:mt-3 sm:mb-3 sm:ml-0 sm:mr-1 w-[30%] sm:break-words sm:w-[50%]">
          {menu}
        </h2>
      </div>
      <div className="phoneHidden  sm:flex  ml-2 sm:w-[25%] sm:flex-row justify-between sm: h-6">
        <span className="icon  flex items-center justify-center w-[25%] sm:w-[57%]   sm:block ">
          {menu === 'boissons' && <MdOutlineLocalDrink />}
          {menu === 'dessert' && <GiCakeSlice />}
          {menu === 'menu adult' && <ImManWoman />}
          {menu === 'menu enfent' && <FaChild />}
          {menu === 'seul' && <GiFullPizza />}
        </span>
        {menu === 'menu adult' || menu === 'menu enfent' ? (
          <>
            <span className="icon hidden sm:block sm:w-[55%]">
              <MdOutlineLocalDrink />
            </span>
            <span className="icon hidden sm:block sm:w-[55%]">
              <GiFullPizza />
            </span>
            <span className="icon hidden sm:block sm:w-[55%]">
              <GiCakeSlice />
            </span>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

  // return (
  //   <div className='uppercase text-center rounded-t-xl overflow-hidden border active:border-blue-300 shadow-md shadow-slate-50 hover:shadow-lg hover:scale-105 hover:shadow-slate-100 active:shadow-slate-100 flex flex-row flex-wrap justify-center mb-7 w-[100%]'>
  //     <div className=' w-full   '>
  //       <Image
  //         layout='responsive'
  //         src='/assets/fernando-andrade-_P76trHTWDE-unsplash.jpg'
  //         width='99%'
  //         height='100%'
  //         objectFit='cover'
  //         alt='/'
  //         className=''
  //       />
  //     </div>
  //     <div className='flex flex-col p-1 '>
  //       <h2 className='p-1 m'>menu Adulte</h2>

  //       <div className='flex flex-row justify-around pb-2'>
  //         <span className='icon'>
  //           <ImManWoman />
  //         </span>{' '}
  //         <span className='icon'>
  //           <MdOutlineLocalDrink />
  //         </span>
  //         <span className='icon'>
  //           <GiFullPizza />
  //         </span>
  //         <span className='icon'>
  //           <GiCakeSlice />
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // );
