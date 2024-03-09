import React from "react";
import { categoryBannerData } from "../../../data/data";
import { CategoryCard } from "../category-card/category-card";

export const CategoryBanner = () => {
  return (
    <>
      {categoryBannerData.map((item) => (
        <CategoryCard key={item.id} img={item.img} title={item.title} />
      ))}
    </>
  );
};
