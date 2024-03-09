import React from "react";
import { Search } from "./components/search";
import { Auth } from "./components/auth/auth";
import { HeaderPath } from "./components/header-path";
import logo from "../../assets/logo.svg";
import "./header.scss";

export const Header = () => {
  return (
    <div className="container header__container">
      <div className="main_header">
        <img src={logo} alt="Liber logo" />
        <Search />
        <Auth />
      </div>
      <HeaderPath />
    </div>
  );
};
