/* -------------------------------------------------------------------------- */
/*                                   import                                   */
/* -------------------------------------------------------------------------- */

import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
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
  return (
    <header className='flex flex-col '>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Announce />
      <Slide />
      <main className='flex flex-row  justify-around '>
        <SideBarL />
        <ProductCartList />
      </main>
    </header>
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
