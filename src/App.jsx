import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Customers from './components/Customers';
import Prodhomme from './components/Prodhomme';
import Prodfemme from './components/Prodfemme';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/produits' element={<Customers />} />
            <Route path='/produits/hommes' element={<Prodhomme />} />
            <Route path='/produits/femmes' element={<Prodfemme />} />
          </Route>
        </Routes>
      </Router>
      {/* <Nabvar />
      <Hero />
      <Navigation />
      <NewProducts />
      <Produits /> */}
    </>
  )
}

export default App
