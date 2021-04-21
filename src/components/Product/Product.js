import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const product = props;
  return (
    <div className="product col l-3 m-6 c-12">
      <Link to="/">
        <div className="product-content">
          <div className="product-overlay"></div>
          <img
            alt="img"
            src="//cdn.shopify.com/s/files/1/2706/6204/products/12_402ef72f-0946-49d5-b7cd-e0298eccd0cb.jpg?v=1517819922"
          />
          <div className="product-detail">
            <div className="product-name">
              <Link to="/">Facewash Cream</Link>
            </div>

            <div className="product-price">
              <span>200000</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="product-button">
        <i
          onClick={() => {
            dispatch(addProduct("Hello"));
          }}
          className="fas fa-cart-plus"
        ></i>
        <i className="fas fa-eye"></i>
        <i className="fas fa-heart"></i>
      </div>
    </div>
  );
};

export default Product;
