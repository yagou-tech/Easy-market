import React from 'react';
import Hero from "./Hero";
import Navigation from "./Navigation";
import NewProducts from "./NewProducts";
import Produits from "./Produits";
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Navigation />
      <NewProducts />
      <Produits />
      <Testimonials />
    </div>
  )
}

export default Home