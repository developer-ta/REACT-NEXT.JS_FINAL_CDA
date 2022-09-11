import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function GlobalContainer(props) {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}
