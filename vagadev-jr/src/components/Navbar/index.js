import React from "react";

import iconHamburguer from "../../assets/svgs/icon_hamburguer.svg";
import logo from "../../assets/svgs/Logo_N1_Rush.svg";
import paperPlane from "../../assets/svgs/paper-plane.svg";
import search from "../../assets/svgs/search-solid.svg";
import shoppingBag from "../../assets/svgs/shopping-bag-solid.svg";

import "./navbar.css";

function Navbar() {
  return (
    <nav className="container-nav">
      <div className="nav-left">
        <ul>
          <li>
            <img src={iconHamburguer} alt="menu" className="menu" />
          </li>
          <li>
            <img src={logo} alt="logo" className="logo" />
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <img
              src={paperPlane}
              className="paperPlane"
              alt="Ícone referente ao contato"
            />{" "}
            <span>CONTATO</span>
          </li>
          <span className="divider" />
          <li>
            <img
              src={search}
              className="search"
              alt="Ícone referente ao buscador"
            />{" "}
            <span>BUSCAR</span>
          </li>
          <span className="divider" />
          <li>
            <img
              src={shoppingBag}
              className="shoppingBag"
              alt="Ícone referente a sacola de compras"
            />
            <span className="bagde">
              <div className="bagde-value">2</div>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
