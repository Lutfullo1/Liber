import React from "react";
import "./footer.scss";
import googleplay from "../../assets/googleplay.svg";
import applestore from "../../assets/applestore.svg";
import socials from "../../assets/socials.svg";
import uzcard from "../../assets/uzcard.svg";
import humo from "../../assets/humo.svg";
import tiktok from "../../assets/tiktok.svg";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer__container">
          <ul className="footer__list">
            <h4>Платформа хақида</h4>
            <li>Liber ўзи нима?</li>
            <li>Фойдаланиш шартлари</li>
            <li>Ёрдам</li>
          </ul>
          <ul className="footer__list">
            <h4>Обуна хақида</h4>
            <li>Обуна бўлиш</li>
            <li>Қандай тўлаш</li>
          </ul>
          <ul className="footer__list">
            <h4>Китоблар</h4>
            <li>Аудио китоблар</li>
            <li>Электрон китоблар</li>
            <li>Китоблар</li>
          </ul>
          <ul className="footer__list">
            <h4>Мобил илова</h4>
            <img src={googleplay} alt="" />
            <img src={applestore} alt="" />
          </ul>
        </div>
      </footer>

      <div className="footer__bottom">
        <div className="container footer__bottom__container">
          <ul className="footer__bottom__text">
            <p>Ижтимоий тармоқлар</p>
            <img className="socials" src={socials} alt="" />
            <img className="socials" src={socials} alt="" />
            <img className="socials" src={tiktok} alt="" />
            <img className="socials" src={tiktok} alt="" />
          </ul>
          <ul className="footer__bottom__text">
            <p>Боғланиш</p>
            <li>+998 90 253 77 53 support@liber.uz</li>
          </ul>
          <ul className="footer__bottom__text">
            <p>Биз қабул қиламиз</p>
            <img src={uzcard} alt="" />
            <img src={humo} alt="" />
            <img src={humo} alt="" />
          </ul>
        </div>
      </div>
    </>
  );
};
