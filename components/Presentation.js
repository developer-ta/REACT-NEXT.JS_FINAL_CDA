import React, { useState } from 'react';
import Image from 'next/image';

export default function Presentation() {
  const [imgSlide, setImgSlide] = useState([]);
  return (
    <div className='flex flex-col p-1 sm:w-[100%] sm:h-1/6 m-auto max-w-[1420px]'>
      <Image
        layout='responsive'
        src='/assets/img3.jpg'
        objectFit='cover'
        width='1300'
        height='650'
        alt='/'
        className='rounded-xl'
      />
    </div>
  );
}
