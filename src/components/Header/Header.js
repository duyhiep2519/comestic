import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "static/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(cart.sumProduct);
  }, [cart]);
  return (
    <header>
      <div className="top-bar">
        <ul className="top-bar-list">
          <li className="top-bar-item">
            <i className="fab fa-facebook-f"></i>
          </li>
          <li className="top-bar-item">
            <i className="fab fa-instagram"></i>
          </li>
          <li className="top-bar-item">
            <i className="fab fa-twitter"></i>
          </li>
        </ul>
      </div>
      <div className="header-sticky">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-list">
          <ul className="header-ul">
            <li className="header-li">
              <Link to="/">Home</Link>
            </li>
            <li className="header-li">
              <Link to="/">Catalog</Link>
            </li>
            <li className="header-li">
              <Link to="/">Shop</Link>
            </li>
            <li className="header-li">
              <Link to="/">Pages</Link>
            </li>
            <li className="header-li">
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="header-icon">
          <span className="fa fa-shopping-basket">
            <div className="cart-icon-quantity">{count}</div>
            {count === 0 ? (
              <div className="header-setting">
                <p>
                  Your cart is currently empty{" "}
                  <i className="far fa-sad-tear"></i>
                </p>

                <p>Continue shopping</p>
              </div>
            ) : (
              <div className="header-setting">
                <p>
                  <Link to="/cart">Go to your cart</Link>
                </p>
              </div>
            )}
          </span>
          <span className="fa fa-search"></span>
          <span className="fa fa-cog">
            <div className="header-setting">
              <ul>
                <li>Login</li>
                <li>Create account</li>
              </ul>
            </div>
          </span>
          <span className="menu-icon">
            <label htmlFor="nav-input" className="fa fa-bars"></label>
          </span>
        </div>
        <input id="nav-input" type="checkbox" />
        <label htmlFor="nav-input" className="header-list-overlay"></label>

        <div className="header-list-mobile">
          <span>
            <label htmlFor="nav-input" className="fa fa-times"></label>
          </span>
          <ul className="header-ul-mobile">
            <li className="header-li-mobile">
              <Link to="/">Home</Link>
            </li>
            <li className="header-li-mobile">
              <Link to="/">Catalog</Link>
            </li>
            <li className="header-li-mobile">
              <Link to="/">Shop</Link>
            </li>
            <li className="header-li-mobile">
              <Link to="/">Pages</Link>
            </li>
            <li className="header-li-mobile">
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
