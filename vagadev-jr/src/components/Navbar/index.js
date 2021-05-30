import React, { useState, useEffect } from "react";

import Menu from "../Menu";

import iconHamburguer from "../../assets/svgs/icon_hamburguer.svg";
import iconClose from "../../assets/img/close-window.png";
import logo from "../../assets/svgs/Logo_N1_Rush.svg";
import paperPlane from "../../assets/svgs/paper-plane.svg";
import search from "../../assets/svgs/search-solid.svg";
import shoppingBag from "../../assets/svgs/shopping-bag-solid.svg";

import "./navbar.css";

function Navbar(props) {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [scrollValue, setScrollValue] = useState(window.scrollY);
  const [searchValue, setSearchValue] = useState("");
  const [visibleSearch, setVisibleSearch] = useState(false);

  useEffect(() => {
    return (window.onscroll = () => setScrollValue(window.scrollY));
  });

  const dataMenu = [
    {
      title: "Luta",
      itens: ["Mortal Kombat", "Smash Bros", "Killer Instict", "DBZ Kakarot"],
    },
    {
      title: "Ação / Aventura",
      itens: ["GTA V", "Tomb Raider", "HALO", "Call of Duty"],
    },
    {
      title: "Corrida",
      itens: ["NEED For SPEED", "Forza Horizon"],
    },
  ];

  const onSearch = (value) => {
    setSearchValue(value);
    props.onSearch(value);
  };
  return (
    <nav
      className={
        scrollValue >= 300 ? "container-nav active-scroll" : "container-nav"
      }
    >
      <div className="nav-left">
        <ul>
          <li>
            <img
              src={visibleMenu ? iconClose : iconHamburguer}
              alt="menu"
              className="menu"
              onClick={() => setVisibleMenu(!visibleMenu)}
            />
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
            />
            <span className="nav-item-label">CONTATO</span>
          </li>
          <span className="divider" />
          <li>
            <img
              src={search}
              className="search"
              alt="Ícone referente ao buscador"
              onClick={() => setVisibleSearch(!visibleSearch)}
            />
            <span
              onClick={() => setVisibleSearch(!visibleSearch)}
              className="nav-item-label"
            >
              BUSCAR
            </span>

            <div
              className={
                visibleSearch ? "search-container visible" : "search-container"
              }
            >
              <input
                className="search-input"
                value={searchValue}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
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
      <Menu data={dataMenu} visible={visibleMenu} />
    </nav>
  );
}

export default Navbar;
