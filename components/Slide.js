import React, { useState } from 'react';
import Image from 'next/image';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
export default function Slide() {
  const [imgSlide, setImgSlide] = useState([]);
  return (
    <div className="flex flex-col  m-auto w-[99.9%] relative  mb-2">
      <div className="overflow-hidden">
        <Image
          layout="responsive"
          src="/assets/img6.jpg"
          objectFit="cover"
          width="800"
          height="300"
          alt="/"
          className="rounded-t-xl rounded-b-md
          "
        />
      </div>

      <div className="text-4xl sm:text-5xl  text-violet-700/80 flex flex-row justify-around w-full absolute bottom-[-3%] hover:scale-105 hover:text-violet-700  lg:bottom-[-1%] sm:bottom-[0%]">
        <FaAngleDoubleLeft />

        <FaAngleDoubleRight />
      </div>
    </div>
  );
}
