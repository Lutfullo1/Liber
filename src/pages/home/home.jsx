import React from "react";
import { HeroBanner } from "../../components/banner/hero-banner";
import { MainLayout } from "../../layout/main-layout";
import { serviceData } from "../../data/data";
import heroBannerImg from "../../assets/hero-banner.svg";
import { ServiceCard } from "../../components/cards/service-card/service-card";
import "./home.scss";
import { CategoryBanner } from "../../components/cards/banner-card/category-banner";
import { productData } from "../../data/data";
import { ProductBanner } from "../../components/banner/product-banner";
import { ProductBanner2 } from "../../components/banner/product-banner2";
import { ProductCard } from "../../components/cards/product-card/product-card";

import { productData2 } from "../../data/data";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <MainLayout>
      <section className="Hero">
        <div className="container">
          <div className="hero__main_banner">
            <div className="hero__left_banner">
              <h2 className="hero__title">Кўп ўқилаётганлар</h2>
              <img className="hero_banner_img" src={heroBannerImg} alt="" />
              <HeroBanner />
            </div>
            <div className="hero_card">
              <h3 className="hero_card__title">Китоб ўқишни ёқтирасизми?</h3>
              <p className="hero_card__text">
                Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
              </p>
              <button className="hero_card__btn">Обуна бўлиш</button>
            </div>
          </div>
        </div>
      </section>

      <section className="service">
        <div className="container service__container">
          {serviceData.map((item) => (
            <ServiceCard
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>

      <section className="category">
        <div className="container ">
          <h2 className="category_title">Рукнлар</h2>
          <div className="category_card__wrapper">
            <CategoryBanner />
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <ProductBanner>
            {productData.map((item) => (
              <Link to={`/${item.id}`}>
                <ProductCard
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  rating={item.rating}
                  headphone={item.headphone}
                />
              </Link>
            ))}
          </ProductBanner>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <ProductBanner2>
            {productData2.map((item) => (
              <Link to={`/${item.id}`}>
                <ProductCard
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  rating={item.rating}
                  headphone={item.headphone}
                />
              </Link>
            ))}
          </ProductBanner2>
        </div>
      </section>
    </MainLayout>
  );
};
