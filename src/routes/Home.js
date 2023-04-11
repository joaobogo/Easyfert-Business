import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Lowfooter from '../components/Lowfooter';
import Products from '../components/Products';
import WhatsappBtn from '../components/WhatsappBtn';







const Home = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Products/>
      <Footer/>
      <Lowfooter/>
      <WhatsappBtn/>
    </div>
  );
};

export default Home