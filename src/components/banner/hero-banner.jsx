import React from "react";
import { heroBannerData } from "./banner-data";
import { BannerCard } from "../cards/banner-card/banner-card";
import "./hero-banner.scss";

export const HeroBanner = () => {
  return (
    <div className="hero_banner__wrapper">
      {heroBannerData.map((item) => (
        <BannerCard img={item.img} title={item.title} key={item.id} />
      ))}
    </div>
  );
};
