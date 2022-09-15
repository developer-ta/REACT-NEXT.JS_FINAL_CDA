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

export default function SideBarTop() {
  const { menu } = useSelector((state) => state.data.event);
  console.log('menu: ', menu);

  const dispatch = useDispatch();
  //const [state, setstate] = useState(initialState);

  return (
    <div className='w-[99%] flex flex-row justify-around pt-5 mb-4'>
      <button className=' btn'>{menu} hhhh</button>
      <button className=' btn'>{menu} hhhh</button>
      <button className=' btn'>{menu} hhhh</button>
      {/* <div className='flex flex-col ml-2 sm:w-[25%] sm:flex-row justify-between sm: h-6'>
        
        <span className='icon flex items-center justify-center w-[25%] sm:w-[57%]   sm:block '>
          {menu} hello
        </span> */}
      {/* {menu === 'boissons' && < />}
          {menu === 'dessert' && < />}
          {menu === 'menu adult' && < />}
          {menu === 'menu enfent' && <FaCild />}
          {menu === 'pizza seul' && < />}
        </span>
        {menu === 'menu adult' || menu === 'menu enfent' ? (
          <>
            <span className='icon hidden sm:block sm:w-[55%]'>
           {menu}
            </span>
            <span className='icon hidden sm:block sm:w-[55%]'>
              <GiFullPizza />
            </span>
            <span className='icon hidden sm:block sm:w-[55%]'>
              <GiCakeSlice />
            </span>
          </>
        ) : (
          ''
  //       )} */}
    </div>
    //   </div>
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
