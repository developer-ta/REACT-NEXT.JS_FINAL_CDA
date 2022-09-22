/* -------------------------------------------------------------------------- */
/*                                   import                                   */
/* -------------------------------------------------------------------------- */

import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import SideBarL from '../../components/SideBarL';
import Presentation from '../../components/Presentation';
import ProductCartList from '../../layouts/ProductCartList';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

/* -------------------------------------------------------------------------- */
/*                                    react                                   */
/* -------------------------------------------------------------------------- */

export default function Home({ data }) {
  console.log('data: ', data);
  const [dataPizza, setdataPizza] = useState(data);
  console.log('dataPizza: ', dataPizza);
  return (
    <div className="flex flex-col max-w-[1420px]  h-[1380px] ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Presentation />

      <main className="pizzaHomeMain  ">
        <SideBarL />
        <ProductCartList data={dataPizza} />
      </main>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                      Communication avec serveur getServerSideProps         */
/* -------------------------------------------------------------------------- */
export async function getServerSideProps(ctx) {
  //   const data = await axios.get();
  const data = await import('../pizza/j.json');
  const pizza = data.pizza;

  //   const res = await data.;
  return {
    props: {
      data: pizza,
    },
  };
}
