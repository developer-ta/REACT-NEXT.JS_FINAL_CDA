import React from 'react';
import ProductCart from '../components/ProductCart';

export default function ProductCartList() {
  return (
    <section className='section '>
      <div className=''></div>
      <div className='flex flex-col p-2 sm:p-7'>
        {/* Poisson  */}
        <h1 className='text-center mb-4'>Poisson</h1>
        <div className='flex flex-row flex-wrap justify-between '>
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
        <div>
          <h1>viande</h1>
          <ProductCart />
          <ProductCart />

          <ProductCart />
        </div>
        <div>
          <h1> sans viande</h1>
          <ProductCart />
        </div>
      </div>
    </section>
  );
}
