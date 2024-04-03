import React from "react";
import logo from "../assets/Logo.svg";
import search from "../assets/Search.svg";
import lisbar from "../assets/listbar.svg";
import panier from "../assets/panier.svg";
import user from "../assets/user.svg";
import like from "../assets/like.svg";
import car from "../assets/car.svg";
import { BsTelephone } from 'react-icons/bs';
import "../css/navbar.css";

const Nabvar = () => {
  return (
    <>
      <div className="header row pb-3">
          <div className="col-4 info">
            <img src={car} alt="" />
            <span className="ps-1">Service disponoble 24h/24</span>
          </div>
          <div className="col-4 info">
            <img src={car} alt="" />
            <span className="ps-1">Livraison 24h</span>
          </div>
          <div className="col-4 info">
            <BsTelephone />
            <span className="ps-1">33 00 000 000</span>
          </div>
      </div><br />
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <img src={logo} className="logo" alt="logo easy market" />
            <div class="InputContainer">
              <label for="input" class="labelforsearch">
                <img src={search} alt="" />
              </label>
              <input
                type="text"
                name="text"
                class="input"
                id="input"
                placeholder="Rechercher un produit"
              />

              
              <div class="border"></div>

              <button class="micButton">
                <img src={lisbar} alt="" />
              </button>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-4">
                <li class="nav-item ps-2 pe-2">
                  <a class="nav-link" aria-current="page" href="#">
                    <img src={user} alt="" />
                    <span>Mon compte</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <img src={like} alt="" />
                    <span>Favoris</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <img src={panier} alt="" />
                    <span>Panier</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Nabvar;
