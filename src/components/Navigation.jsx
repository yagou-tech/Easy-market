import React from 'react';
import hommes from "../assets/hommes.svg";
import femmes from "../assets/femmes.svg";
import enfants from "../assets/enfants.svg";
import equipements from "../assets/equipements.svg";
import parking from "../assets/parking.svg";
import "../css/navigation.css";
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation d-flex justify-content-center align-items-center pt-4 mb-5   '>
        <Link to="/produits/hommes">
            <div className='items pe-4'>
                <span>Hommes</span>
                <div className='item'>
                    <img className='img-fluid' style={{"width":"40%"}} src={hommes} alt="" />
                </div>
            </div>
        </Link>
        <Link to="/produits/femmes">
            <div className='items pe-4'>
                <span>Femmes</span>
                <div className='item'>
                    <img className='img-fluid' style={{"width":"40%"}} src={femmes} alt="" />
                </div>
            </div>
        </Link>
        <div className='items pe-4'>
            <span>Enfants</span>
            <div className='item'>
                <img className='img-fluid' style={{"width":"40%"}} src={enfants} alt="" />
            </div>
        </div>
        <div className='items pe-4'>
            <span>Equipements</span>
            <div className='item'>
                <img className='img-fluid' style={{"width":"40%"}} src={equipements} alt="" />
            </div>
        </div>
        <div className='items pe-4'>
            <span>Parking</span>
            <div className='item'>
                <img className='img-fluid' style={{"width":"30%"}} src={parking} alt="" />
            </div>
        </div>
        <div className='items pe-4'>
            <span>Parking</span>
            <div className='item'>
                <img className='img-fluid' style={{"width":"30%"}} src={parking} alt="" />
            </div>
        </div>
        <div className='items pe-4'>
            <span>Parking</span>
            <div className='item'>
                <img className='img-fluid' style={{"width":"30%"}} src={parking} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navigation