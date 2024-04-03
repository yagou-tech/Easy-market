import React from 'react';
import { BsQuote } from "react-icons/bs";
import "../css/testimonials.css";

const CardTestimonials = (props) => {
  return (
    <div>
        <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card position-relative'>
          <BsQuote className="temoinage w-[42px] h-[27px] object-contain right-0 pb-2" />
          <p className="font-poppins font-normal text-[18px] leading-[32px] text-black my-10 content">{props.content}</p>
          <div className="flex flex-row">
            <img src={props.image} alt={props.name} className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{props.name}</h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{props.title}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CardTestimonials