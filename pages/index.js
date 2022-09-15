/* -------------------------------------------------------------------------- */
/*                                   import                                   */
/* -------------------------------------------------------------------------- */

import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEventSlideL, reSetEventSlideL } from '../redux/featureData';
import Announce from '../components/Announce';

import NavBar from '../components/NavBar';
import SideBarL from '../components/SideBarL';
import Slide from '../components/Slide';
import MainSection from '../layouts/MainSection';
import ProductCartList from '../layouts/ProductCartList';
/* -------------------------------------------------------------------------- */
/*                                    react                                   */
/* -------------------------------------------------------------------------- */

export default function Home() {
  //state.DataSliceL.eventSlideL

  return (
    <div className='flex flex-col max-w-[1420px] m-auto'>
      <Head>
        <title>Create Next App </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Announce />
        <Slide />
      </header>

      <main className='flex flex-row  justify-around  '>
        <SideBarL />
        <ProductCartList />
      </main>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                      Communication avec serveur getServerSideProps         */
/* -------------------------------------------------------------------------- */

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}
