import React from "react";
import { headerData } from "../../header-data";

export const HeaderPath = () => {
  return (
    <ul className="header_bottom">
      {headerData.map((item) => (
        <li className="header__item">
          <a className="header__link" href={item.path}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
