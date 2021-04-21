import React from "react";
import "./Cart.css";
import Layout from "Layout/Layout";
const Cart = () => {
  return (
    <Layout title="Cart" description="Your Cart">
      <div className="cart">
        <h2>Your Cart</h2>
        <div className="cart-header row">
          <span className="cart-header-left col l-4 m-4 c-12">Product</span>
          <div className="cart-header-right col l-8 m-8 c-0">
            <div className="cart-header-right-inner">
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span>Remove</span>
            </div>
          </div>
        </div>
        <div className="cart-product row">
          <div className="cart-product-name col l-4 m-4 c-12">
            <img
              alt="img"
              src="//cdn.shopify.com/s/files/1/2706/6204/products/12_402ef72f-0946-49d5-b7cd-e0298eccd0cb.jpg?v=1517819922"
            />
            <span> COLD CREAM LOTION</span>
          </div>
          <div className="cart-product-detail  col l-8 m-8 c-12">
            <div className="cart-product-detail-inner">
              <div className="cart-price">
                <p className="cart-detail-mobile">Price</p>
                100000k
              </div>
              <div className="cart-quantity">
                <p className="cart-detail-mobile">Quantity</p>
                <div className="cart-quantity-btn">
                  <input
                    type="button"
                    value="-"
                    className="btn-minus btn-cart"
                  />
                  <input
                    type="text"
                    value="1"
                    min="0"
                    className="btn-quantity"
                  />
                  <input
                    type="button"
                    value="+"
                    className="btn-plus btn-cart"
                  />
                </div>
              </div>
              <div className="cart-total">
                <p className="cart-detail-mobile">Total</p>
                200
              </div>
              <div className="cart-remove">
                <p className="cart-detail-mobile">Remove</p>
                <i className="fa fa-trash"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
