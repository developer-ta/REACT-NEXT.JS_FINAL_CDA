import React, { useState } from 'react';
import Image from 'next/image';

export default function Presentation() {
  const [imgSlide, setImgSlide] = useState([]);
  return (
    <div className="flex flex-col  sm:w-[100%] sm:h-1/5  max-w-[1420px]">
      <Image
        layout="responsive"
        src="/assets/img3.jpg"
        objectFit="cover"
        width="1400"
        height="650"
        alt="/"
        className="rounded-xl"
      />
    </div>
  );
}
