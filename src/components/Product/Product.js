import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal } from "components";
import { addProduct } from "redux/cartSlice";
import { formatCash } from "helpers/formatPrice";
const Product = (props) => {
  const product = props.product;
  const dispatch = useDispatch();

  const [showModal, SetShowModal] = useState(false);

  if (!product) {
    return null;
  }
  return (
    <div className="product col l-3 m-6 c-12">
      <Modal product={product} active={showModal}>
        <span
          className="modal-exit"
          onClick={() => {
            SetShowModal(false);
          }}
        >
          <i className="fas fa-times"></i>
        </span>
      </Modal>

      <Link to="/">
        <div className="product-content">
          <div className="product-overlay"></div>
          <img alt="img" src={`http://localhost:8888/${product.image[1]}`} />
          <div className="product-detail">
            <div className="product-name">
              <Link to="/">{product.name}</Link>
            </div>

            <div className="product-price">
              <span>{formatCash(product.price)} vnd</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="product-button">
        <i
          onClick={(e) => {
            e.preventDefault();
            dispatch(addProduct(product));
          }}
          className="fas fa-cart-plus"
        ></i>
        <i
          onClick={() => {
            SetShowModal(true);
          }}
          className="fas fa-eye"
        ></i>
        <i className="fas fa-heart"></i>
      </div>
    </div>
  );
};

export default Product;
