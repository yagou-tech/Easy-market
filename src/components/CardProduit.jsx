import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
  BsWhatsapp,
  BsTelephoneFill,
  BsFillChatLeftTextFill,
} from "react-icons/bs";
import like from "../assets/like.svg";
import "../css/card.css";

const CardProduit = (props) => {
  return (
    <div className="">
      <div id="CardAtelier" class="card shadow-lg mb-3 p-0">
        <div
          className="card-img-top d-flex justify-content-center
  align-items-center"
        >
          <img src={props.image} alt="" className="img-fluid" />
          <div className="position-relative">
            <div className="btn text-light rounded-circle like position-absolute top-5 end-0">
            <img className="svg" src={like} alt="" />
            </div>
        </div>
        </div>
        
        <div class="card-body">
          <p className="text-uppercase fw-bold">{props.title}</p>
          <p className="text-uppercase fw-bold">{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProduit;
