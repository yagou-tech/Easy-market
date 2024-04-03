import React from "react";
import footerlogo from "../assets/footerlogo.svg";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer p-5">
        <div className="row p-5">
            <div className="col-lg-4 col-sm-12 justify-content-center align-items-center">
                <img src={footerlogo} alt="" />
                <h4>Contactez-nous</h4>
                <div className="contact d-flex pe-5 justify-content-center">
                <BsWhatsapp className="icon"/>
                <p>
                    WhatsApp <br /> +221 77 238 74 83
                </p>
                </div>
                <div className="contact d-flex pe-5 justify-content-center">
                <BsTelephone className="icon" />
                <p>
                    Telephone <br /> +221 77 238 74 83
                </p>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12">
                <h4>Nos categories</h4>
                <ul>
                    <li>Immobilier</li>
                    <li>Equipements</li>
                    <li>Voitures</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="col-lg-4 col-sm-12">
                <h4>Assistance</h4>
                <ul>
                    <li>Comment ça marche</li>
                    <li>Conditions d'utilisation</li>
                    <li>Nos abonnements</li>
                    <li>Politique de confidentialité</li>
                </ul>
            </div>
        </div>
        <div className="copy"><br /><span>&copy; 2023 All rights reserved</span></div>
    </div>
  );
};

export default Footer;
