import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../layout/main-layout";
import profile from "../assets/profile.svg";
import profile_icon1 from "../assets/profile-icon1.svg";
import profile_icon2 from "../assets/profile-icon2.svg";
import profile_icon3 from "../assets/profile-icon3.svg";
import profile_icon4 from "../assets/profile-icon4.svg";
import profile_icon5 from "../assets/profile-icon5.svg";
import profile_icon6 from "../assets/profile-icon6.svg";
import profile_right_icon from "../assets/profile-right-icon.svg";
import "./profile.scss";

export const Profile = () => {
  return (
    <MainLayout>
      <div className="container">
        <div className="home_link">
          <Link to="/">Бош сахифа /</Link>Профиль
        </div>
        <div className="profile__card">
          <img src={profile} alt="" />
          <div className="profile__content">
            <h4 className="profile__title">Суғдиёна Икромова</h4>
            <p className="profile__text">+998 90 253 77 53</p>
            <p className="profile__id">ID: 0001 Баланс: 45 000 сўм</p>
          </div>
        </div>
        <div className="profile__cards">
          <div className="profile__left">
            <div className="profile__items">
              <img src={profile_icon1} alt="" />
              <p>Обуна бўлиш</p>
            </div>
            <div className="profile__items">
              <img src={profile_icon2} alt="" />
              <p>Э-Хисоб</p>
            </div>
            <div className="profile__items">
              <img src={profile_icon3} alt="" />
              <p>Китобларим</p>
            </div>
            <div className="profile__items">
              <img src={profile_icon4} alt="" />
              <p>Сақланганлар</p>
            </div>
            <div className="profile__items">
              <img src={profile_icon5} alt="" />
              <p>Созламалар</p>
            </div>
            <div className="profile__items">
              <img src={profile_icon6} alt="" />
              <p>Тунги режим</p>
            </div>
          </div>
          <div className="profile__right">
            <div className="profile__right_top">
              <p className="profile__right_title">
                Узингиз севган булимга обуна бўлинг
              </p>
              <img
                className="profile_right_icon"
                src={profile_right_icon}
                alt=""
              />
            </div>
            <div className="profile__right_bottom">
              <form className="profile__bottom_form">
                <p className="profile__bottom_title">Обуна</p>
                <p className="profile__bottom_text">Обуна давом этиш вакти</p>
                <div className="profile__bottom_option">30 кун</div>
                <p className="profile__bottom_text">Булимни танланг</p>
                <div className="profile__bottom_option">Фантастика</div>
                <p className="profile__bottom_subtitle">
                  Обуна 30 кун давом этади
                </p>
              </form>
              <div className="profile__right_price">
                <div className="profile__right_price_item">
                  <p>Бошланиш вакти</p>
                  <p>12/09/2021</p>
                </div>
                <div className="profile__right_price_item">
                  <p>Якунланиш вакти</p>
                  <p>12/10/2021</p>
                </div>
                <div className="profile__right_price_item">
                  <p>Обуна нархи</p>
                  <p className="profile__right_price_item_price">12 000 сум</p>
                </div>
                <button className="profile__right_btn">Обуна булиш</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
