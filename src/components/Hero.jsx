import React from 'react';
import "../css/hero.css";
import post from "../assets/post.png";
import barres from "../assets/barres.svg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='row hero justify-content-center align-items-center ps-5'>
        <div className='col-lg-6 col-sm-12 texte justify-content-center align-items-center '>
            <h1>Votre site e-commerce personnalisable</h1>
            <p>Vendez facilement vos meilleurs produits grâce à Easy Market</p>
            <Link to="/produits">
              <button>VOIR NOS PRODUITS</button>
            </Link>
        </div>
        <div className='col-lg-6 col-sm-12'>
            <img id='post' src={post} alt="" />
            <img id='barres ' src={barres} alt="" />
        </div>
    </div>
  )
}

export default Hero