{
  /* choose==='menu' age==='adult' */
}
{
  /* choose==='menu' age==='enfant' */
}
{
  /* choose==='seul' age==='enfant' */
}
{
  /* choose===' boissons */
}
{
  /* choose===' dis Siri'*/
}
import React, { useState, useEffect } from 'react';
import ProductCart from '../components/ProductCart';
import { useSelector } from 'react-redux';
// c'est ton option dépendre sélection de produits Pizza adulte enfants Ussel
export default function ProductCartList() {
  const { menu } = useSelector((state) => state.data.event);
  // console.log('menu: ', menu);

  const [stateChoose, setChoose] = useState('');

  const [choose, age] = menu;
  useEffect(() => {
    console.log('choose: ', choose);

    if (choose === 'menu' || choose === 'seul' || age === 'adult' || age === 'enfant') {
      setChoose('');
    }
    if (choose === 'boissons' || choose === 'dessert') {
      setChoose('hidden');
    }
  }, [menu]);

  return (
    <section className='section bg-gradient-to-r from-slate-900  to-cyan-900 text-stone-10  '>
      <div
        className={`w-[100%]  flex flex-row justify-around mb-4 shadow-slate-500 shadow-sm  border-b pb-3 pt-3 ${stateChoose}`}
      >
        <a href='#viande'>
          <button className=' btn'>viande</button>
        </a>
        <button className=' btn'>{menu} Poisson/fruit de la mère</button>
        <button className=' btn'>{menu} sans viande</button>
      </div>
      <div
        className={`w-[100%]  flex flex-row justify-around mb-4 shadow-slate-500 shadow-sm  border-b pb-3 pt-3 ${
          choose === 'boissons' || choose === 'dessert' ? '' : 'hidden'
        }`}
      >
        <button className=' btn'>{choose} </button>
      </div>

      <div className='flex flex-col p-2 sm:p-7 '>
        {/* Poisson  */}
        <h1 className='text-center mb-4 '>Poisson {menu}</h1>
        <div className='flex flex-row flex-wrap justify-between '>
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
        <div id='viande' className='pt-'>
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
