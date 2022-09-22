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
import { useRouter } from 'next/router';
import Link from 'next/link';

// c'est ton option dépendre sélection de produits Pizza adulte enfants Ussel
export default function ProductCartList({ data }) {
  console.log('dataPizza: ', data);
  const fishPizza = {
    meat: 'Viande',
    fish: 'Poisson',
    withoutMeat: 'Sans Viande',
  };
  const { menu } = useSelector((state) => state.data.event);
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState('');
  const router = useRouter();
  console.log('router: ', router);

  const [stateChoose, setChoose] = useState('');

  function handleType(ingredient) {
    console.log('ingredient: ', ingredient);
    setResult(data.filter((item) => item.type[ingredient] === true));
    setTitle(fishPizza[ingredient]);
  }
  console.log('result: ', result);
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
    <section className="section bg-gradient-to-r from-slate-900  to-cyan-900 text-stone-10 sm: ">
      <div
        className={`w-[100%]  flex flex-row justify-around  shadow-slate-500 shadow-sm  border-b pb-3 pt-3 ${stateChoose}`}
      >
        <button className=" btn" onClick={() => handleType('meat')}>
          viande
        </button>

        <button
          className=" btn p-2  md:min-w-[190px] flex flex-col"
          onClick={() => handleType('fish')}
        >
          Poisson <br /> <span className="text-xs text-orange-300">fruit de la mère</span>
        </button>
        <button className=" btn" onClick={() => handleType('withoutMeat')}>
          {' '}
          sans viande
        </button>
      </div>
      <div
        className={` flex flex-row justify-around mb-4 shadow-slate-500 shadow-sm  border-b pb-3 pt-3 ${
          choose === 'boissons' || choose === 'dessert' ? '' : 'hidden'
        }`}
      >
        <h1 className="prose uppercase text-center  text-9xl bg-gradient-to-br from-orange-400 to-cyan-700   font-bold rounded-3xl overflow-hidden ">
          {choose}{' '}
        </h1>
      </div>

      <div className="flex flex-col  sm:p-7 ">
        <h1 className="text-center mb-3 text-8xl">{title}</h1>

        <div className="flex flex-row flex-wrap justify-around ">
          {result.map((product, i) => (
            <Link
              key={i}
              href={{
                //id data in title
                pathname: `/pizza/${title}`,
                query: { choose, age },
              }}
              passHref
            >
              <a className="w-[27%] mb-4">
                <ProductCart />
              </a>
            </Link>
          ))}
        </div>
        {/* <div id='viande' className='pt-'>
          <h1>viande</h1>

          <ProductCart />

          <ProductCart />
          <ProductCart />

          <ProductCart />
        </div>
        <div>
          <h1> sans viande</h1>
          <ProductCart />
        </div> */}
      </div>
    </section>
  );
}
