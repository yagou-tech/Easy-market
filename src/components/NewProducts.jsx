import React, { useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Intersection } from '@splidejs/splide-extension-intersection';
import '@splidejs/react-splide/css';
import "../css/newproduits.css";
import chemise1 from "../assets/Produits/chemise1.png";
import chaussure1 from "../assets/Produits/chaussure1.png";
import parfum1 from "../assets/Produits/parfum1.png";
import parfum2 from "../assets/Produits/parfum2.png";
import sac1 from "../assets/Produits/sac1.png";
import parfum3 from "../assets/Produits/parfum3.png";
import cocacola from "../assets/Produits/coca-cola.png";
import foullard from "../assets/Produits/foullard1.png";
import chaussure2 from "../assets/Produits/chaussure2.png";
import montres1 from "../assets/Produits/montres1.png";
import Tulsi from "../assets/Produits/Tulsi.png";
import nike1 from "../assets/Produits/nike1.png";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const listOfData = [
  {
    id: "0P0Hx1",
    title: "Cotton shirt Regular Fit",
    description: "",
    price: "150 000 fca",
    img: chemise1,
    categorie: "Hommes",
  },
  {
    id: "0P0Hx2",
    title: "Cotton shirt Regular Fit",
    description: "",
    price: "180 000 fca",
    img: chaussure1,
    categorie: "Hommes",
  },
  {
    id: "0P0Hx3",
    title: "Cotton shirt Regular Fit",
    description: "",
    price: "100 000 fca",
    img: parfum1,
    categorie: "Femmes",
  },
  {
    id: "0P0Hx4",
    title: "Cotton shirt Regular Fit",
    description: "",
    price: "90 000 fca",
    img: parfum2,
    categorie: "Hommes",
  },
  {
    id: "0P0Hx5",
    title: "Cotton shirt Regular Fit",
    description: "",
    price: "150 000 fca",
    img: sac1,
    categorie: "Femmes",
  },
  {
    id: "0P0Hx6",
    title: "Cotton shirt Regular Fit",
    description: "",
    price: "50 000 fca",
    img: parfum3,
    categorie: "Femmes",
  },
  {
    id: "0P0Hx7",
    title: "Cotton shirt Regular Fit",
    description: "",
    price: "20 000 fca",
    img: cocacola,
    categorie: "Equipememnts",
  },
  {
    id: "0P0Hx8",
    title: "Cotton shirt Regular Fit",
    description: "",
    price: "50 000 fca",
    img: foullard,
    categorie: "Femmes",
  },
  {
    id: "0P0Hx9",
    title: "Cotton shirt Regular Fit",
    description: "",
    price: "160 000 fca",
    img: chaussure2,
    categorie: "Hommes",
  },
  {
    id: "0P0Hy1",
    title: "Cotton shirt Regular Fit",
    description: "",
    price: "50 000 fca",
    img: montres1,
    categorie: "Femmes",
  },
  {
    id: "0P0Hy2",
    title: "Cotton shirt Regular Fit",
    description: "",
    price: "150 000 fca",
    img: Tulsi,
    categorie: "Femmes",
  },
  {
    id: "0P0Hy3",
    title: "Cotton shirt Regular Fit",
    description: "",
    price: "510 000 fca",
    img: nike1,
    categorie: "Hommes",
  },
];


const NewProducts = () => {
    new Splide( '#splide', {
        autoplay: 'pause',
        intersection: {
          inView: {
            autoplay: true,
          },
        },
      } );
  return (
    <div className="container-fluid mb-5">
      <h1>Mon Carousel</h1>
      <Splide
        options={{
            type       : 'loop',
            height     : '17rem',
            perPage    : 3,
            breakpoints: {
              640: {
                height: '8rem',
              },
            },
          }}
        aria-label="My Favorite Images"
      >
        {listOfData.map((card) => (
        <SplideSlide>
          <Card style={{ width: "18rem", border: "none" }} key={card.id} className="px-0">
            <div className="position-relative">
                <span class="pricing">
                    <span className="">Nouveau</span>
                </span>
                <Card.Img variant="top" src={card.img} class="img-card"
        viewBox="0 0 24 24" />
            </div>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.price}</Card.Text>
            </Card.Body>
          </Card>
        </SplideSlide>
        ))}
        {/* <SplideSlide>
          <img src={parfum1} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={foullard} alt="Image 3" />
        </SplideSlide> */}
      </Splide>
    </div>
  );
};

export default NewProducts;
