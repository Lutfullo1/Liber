import React from "react";
import "./service-card.scss";

export const ServiceCard = ({ title, text, img }) => {
  return (
    <div className="service_card">
      <img className="service_card__img" src={img} alt="img" />
      <div className="service_card__content">
        <h2 className="service_card__title">{title}</h2>
        <p className="service_card__text">{text}</p>
      </div>
    </div>
  );
};
