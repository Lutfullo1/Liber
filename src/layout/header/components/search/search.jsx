import React from "react";
import headerMenu from "../../../../assets/header-menu.svg";
import arrowDown from "../../../../assets/arrow-down.svg";
import searchIcon from "../../../../assets/search-icon.svg";
import "./search.scss";

export const Search = () => {
  return (
    <div className="header__option">
      <div className="header__option_left">
        <img src={headerMenu} alt="" />
        <p className="header__option__text">Рукнлар</p>
        <img src={arrowDown} alt="" />
      </div>
      <input className="search_input" type="text" placeholder="Қидириш" />
      <img className="search_icon" src={searchIcon} alt="" />
    </div>
  );
};
