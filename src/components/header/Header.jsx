import React, { useRef } from "react";
import "./header.scss";

import { NavLink } from "react-router-dom";
import logoImg from "../../img/logoIcon.svg";
import menuImg from "../../img/menuToggle.svg";
import heartIcon from "../../img/heartIcon.svg";
import bagIcon from "../../img/bagIcon.svg";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "cart",
    display: "Cart",
  },
  {
    path: "shop",
    display: "Shop",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <div className="navbar">
        <div className="container navbar__container">
          <div className="navbar__logo">
            <img src={logoImg} alt="logo" />
            <div>
              <h1>Akaya</h1>
            </div>
          </div>

          <nav className="navbar__menu" ref={menuRef} onClick={menuToggle}>
            <ul className="navbar__menu-item">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "navbar__active" : ""
                  }
                  key={index}
                >
                  {item.display}
                </NavLink>
              ))}
            </ul>
          </nav>

          <div className="navbar__icon">
            <span>
              <img src={heartIcon} alt="" />
            </span>
            <span>
              <img src={bagIcon} alt="" />
            </span>
            <button className="navbar__toggle" onClick={menuToggle}>
              <img src={menuImg} alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
