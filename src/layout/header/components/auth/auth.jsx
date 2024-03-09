import React from "react";
import uzbFlag from "../../../../assets/uzb-flag.svg";
import langArrow from "../../../../assets/lang-arrow.svg";
import "./auth.scss";
import { Link } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="header__auth">
      <div className="header__lang">
        <img src={uzbFlag} alt="" />
        <p className="lang_text">Ўз</p>
        <img src={langArrow} alt="" />
      </div>
      <Link to={`/profile/`}>
        <button className="auth_btn">Кириш</button>
      </Link>
    </div>
  );
};
