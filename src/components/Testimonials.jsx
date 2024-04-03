import React from "react";
import CardTestimonials from "./CardTestimonials";
import avatar from "../assets/avatar.png";
import "../css/testimonials.css";

const Testimonials = () => {

  const feedback = [
    {
      id: "feedback-1",
      content: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: avatar,
    },
    {
      id: "feedback-2",
      content: "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
      img: avatar,
    },
    {
        id: "feedback-2",
        content: "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        img: avatar,
      },
  ];

  return (
    <div className="row row mb-5 pt-5">
      <h2>Ce que dises nos clients</h2>
      <div className="feedback col-lg-4">
        {feedback.map((card) => (
          <CardTestimonials image={card.img} title={card.title} content={card.content} name={card.name} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
