import React, { useRef, useEffect } from "react";
import "./header.scss";

import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__sticky");
      } else {
        headerRef.current.classList.remove("header__sticky");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const navigateToCart = () => {
    navigate("./cart");
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="navbar">
        <div className="container navbar__container">
          <div className="navbar__logo">
            <span>
              <i class="ri-shopping-bag-line"></i>
            </span>
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
            <span className="fav__icon">
              <i class="ri-heart-line"></i>
              <span className="badge">1</span>
            </span>
            <span className="cart__icon" onClick={navigateToCart}>
              <i class="ri-shopping-bag-2-line"></i>
              <span className="badge">{totalQuantity}</span>
            </span>
            <button className="navbar__toggle" onClick={menuToggle}>
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
