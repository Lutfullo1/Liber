import React from "react";

export const ProductCard = ({ img, title, desc, rating, headphone }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h4
        style={{
          color: "rgb(17, 20, 45)",
          fontFamily: "Cairo",
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "37px",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          color: "rgb(63, 81, 181)",
          fontFamily: "Open Sans",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "19px",
        }}
      >
        {desc}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <img src={rating} alt="" />
        <img src={headphone} alt="" />
      </div>
    </div>
  );
};
