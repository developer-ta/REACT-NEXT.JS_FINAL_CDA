import React from 'react';
import SideBarL from '../components/SideBarL';
import ProductCartList from './ProductCartList';
import SideBarTop from '../components/SideBarTop';

export default function MainSection() {
  return (
    <div className='bg-blue-600 top-20'>
      <SideBarTop />
      <ProductCartList />
      <SideBarL />
    </div>
  );
}
