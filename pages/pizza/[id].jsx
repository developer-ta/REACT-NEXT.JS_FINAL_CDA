//  pour cette partie on a besoin:
//  Produit id
// Image, description,
// const pizzaSchema = new Schema(
// 	{
// 	  news: { type: String, required: true, maxlength: 100 },
// 	  title: { type: String, required: true, maxlength: 100, unique: true },
// 	  type: { meat: Boolean, fish: Boolean, withoutMeat: Boolean },
// 	  price: { type: Number, required: true, maxlength: 100, trimp: true },
// 	  size: [String],
// 	  desc: { type: String, required: true, maxlength: 300 },
// 	  img: { type: String, required: true, maxlength: 500 },
// 	  promo: { type: Number, required: true, maxlength: 20, default: 0 },
// 	  ingredient: [String],
// 	  extra: [String],
// 	},
// 	{ timestamps: true }
//   );

// on a besoin du prix total de produits

import React, { useState, useEffect } from 'react';
import { fineIcon } from '../../components/FineIcon';
import Presentation from '../../components/Presentation';
import { Link } from 'next/link';
import { HomeIcon } from '@heroicons/react/outline';
import { GiFullPizza } from 'react-icons/gi';
import { GiHamburger } from 'react-icons/gi';
import { useSelector } from 'react-redux';

export default function HandlerProduct() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [icon, setIcon] = useState({});
  const { menu } = useSelector((state) => state.data.event);

  useEffect(() => {
    setIcon(fineIcon());
  }, []);

  return (
    <div>
      <Presentation />
      <ul className='flex flex-row justify-between text-white items-center  pt-1 h-full'>
        <li className='group flex-col flex justify-center items-center   bg-cyan-600 rounded-full p-1 active:bg-cyan-500 '>
          {'title' === 'pizza' ? (
            <GiFullPizza className='w-9 h-9 group-hover:animate-bounce' />
          ) : (
            <GiHamburger className='w-9 h-9 group-hover:animate-bounce' />
          )}
          <p className='text-sm active:scale-105'>{'pizza'}</p>
        </li>
        <li className='group flex-col flex justify-center items-center   bg-cyan-600 rounded-full p-1 active:bg-cyan-500 '>
          {menu.indexOf('menu') !== -1 ? (
            <GiFullPizza className='w-9 h-9 group-hover:animate-bounce' />
          ) : (
            <GiHamburger className='w-9 h-9 group-hover:animate-bounce' />
          )}
          <p className='text-sm active:scale-105'>{'pizza'}</p>
        </li>
      </ul>
    </div>
  );
}
