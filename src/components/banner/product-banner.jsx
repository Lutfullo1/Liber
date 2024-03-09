import React from "react";

export const ProductBanner = ({ children }) => {
  return (
    <div
      className="slider"
      style={{
        marginTop: "64px",
        color: "rgb(36, 36, 36)",
        fontFamily: "Cairo",
        fontSize: "32px",
        fontWeight: "600",
        lineHeight: "40px",
      }}
    >
      <p style={{ marginBottom: "32px" }}>Янги қўшилганлар</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {children}
      </div>
    </div>
  );
};
