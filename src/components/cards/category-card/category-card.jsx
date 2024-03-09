import React from "react";
import "./category-card.scss";

export const CategoryCard = ({ img, title }) => {
  return (
    <div className="category_card">
      <img className="category_card__img" src={img} alt="" />
      <h2 className="category_card__title">{title}</h2>
    </div>
  );
};
