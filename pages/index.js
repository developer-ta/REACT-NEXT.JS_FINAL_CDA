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
import { Link } from 'next/link';
import PromoCart from '../components/PromoCart';
import ProductCart from '../components/ProductCart';
/* -------------------------------------------------------------------------- */
/*                                    react                                   */
/* -------------------------------------------------------------------------- */

export default function Home() {
  //state.DataSliceL.eventSlideL

  return (
    <div className="flex flex-col max-w-[1412px] w-[99.9%]">
      <Head>
        <title>Create Next App </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Announce />
        <Slide />
      </header>

      <main className="flex flex-row  justify-around max-w-[1412px] w-[99.9%] ">
        {/* <SideBarL /> */}

        <div className="flex flex-row flex-wrap justify-around w-full ">
          <PromoCart />
          <PromoCart />
          <PromoCart />
          <PromoCart />
          <PromoCart />
          <PromoCart />
          <PromoCart />
          <PromoCart />
          <PromoCart />
        </div>
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
