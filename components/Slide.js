import React, { useState } from 'react';
import Image from 'next/image';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
export default function Slide() {
  const [imgSlide, setImgSlide] = useState([]);
  return (
    <div className='flex flex-col p-1  m-auto max-w-[1420px] '>
      <div className=''>
        <Image
          layout='responsive'
          src='/assets/img6.jpg'
          objectFit='cover'
          width='500'
          height='200'
          alt='/'
          className='rounded-xl'
        />
      </div>

      <div className='text-4xl flex flex-row justify-around w-full'>
        <FaAngleDoubleLeft />
        <span className=' uppercase text-2xl text-stone-900 font-bold relative bottom-44 right-72 '>
          <h1>titre</h1>
          <p>hhhhh</p>
        </span>
        <FaAngleDoubleRight />
      </div>
    </div>
  );
}
