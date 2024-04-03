import React from "react";
import CardProduit from "./CardProduit";
import sac1 from "../assets/Produits/sac1.png";
import parfum3 from "../assets/Produits/parfum3.png";
import cocacola from "../assets/Produits/coca-cola.png";
import foullard from "../assets/Produits/foullard1.png";
import chaussure2 from "../assets/Produits/chaussure2.png";
import montres1 from "../assets/Produits/montres1.png";
import Tulsi from "../assets/Produits/Tulsi.png";
import nike1 from "../assets/Produits/nike1.png";
import Sidebar from "./Sidebar";



const cardsData = [
    {
      title: "Cotton shirt Regular Fit",
      price: "150 000 fca",
      img: sac1,
      categorie: "Femmes"
    },
    {
      title: "Cotton shirt Regular Fit",
      price: "50 000 fca",
      img: parfum3,
      categorie: "Femmes"
    },
    {
      title: "Cotton shirt Regular Fit",
      price: "50 000 fca",
      img: foullard,
      categorie: "Femmes"
    },
    {
      id: "0P0Hy1",
      title: "Cotton shirt Regular Fit",
      description: "",
      price: "50 000 fca",
      img: montres1,
      categorie: "Femmes"
    },
    {
      id: "0P0Hy2",
      title: "Cotton shirt Regular Fit",
      description: "",
      price: "150 000 fca",
      img: Tulsi,
      categorie: "Femmes"
    },
  ];



const Prodfemme = () => {
  return (
      
    <div>
      <p className='text-start'><span className='fw-bold'>Acceuil</span> {'>'} Nos produits {'>'} Femmes</p>
      <div className='row'>
        <div className='col-lg-2'><Sidebar /></div>
        <div className='col-lg-10'>
        <div className="row mb-5 pt-5">
        <h1 className="mb-4">Produits populaires</h1>
        {cardsData.map((card) => (
          <div className="col-xl-3 col-lg-3 rounded-4 rounded-bottom-0 rounded-4 rounded-bottom-0 border-none">
            <CardProduit image={card.img} title={card.title} price={card.price} />
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Prodfemme;
