import React from "react";
import "./banner-card.scss";

export const BannerCard = ({ title, img }) => {
  return (
    <div className="banner_card">
      <img className="banner_card__img" src={img} alt="img" />
      <h2 className="banner_card__title">{title}</h2>
    </div>
  );
};
