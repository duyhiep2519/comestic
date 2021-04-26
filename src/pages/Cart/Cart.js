import { calcPrice, formatCash } from "helpers/formatPrice";
import Layout from "Layout/Layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, removeProduct } from "redux/cartSlice";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setProducts(cart.cart);
  }, [cart.cart, products]);

  return (
    <Layout title="Cart" description="Your Cart">
      <div className="cart row">
        <div className="cart-title col c-12"></div>
        <div className="cart-header col c-12 row">
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
        {products &&
          products.map((product, key) => (
            <div className="cart-product row" key={key}>
              <div className="cart-product-name col l-4 m-4 c-12">
                <img
                  alt="img"
                  src={`http://localhost:8888/${product.product.image[1]}`}
                />
                <span> {product.product.name}</span>
              </div>
              <div className="cart-product-detail  col l-8 m-8 c-12">
                <div className="cart-product-detail-inner">
                  <div className="cart-price">
                    <p className="cart-detail-mobile">Price</p>
                    {formatCash(product.product.price)} vnd (-
                    <span className="cart-sale">{product.product.sale}%</span>)
                  </div>
                  <div className="cart-quantity">
                    <p className="cart-detail-mobile">Quantity</p>
                    <div className="cart-quantity-btn">
                      <input
                        type="button"
                        value="-"
                        className="btn-minus btn-cart"
                        onClick={() => {
                          if (product.quantity > 0) {
                            dispatch(removeProduct(product.product));
                          }
                        }}
                      />
                      <input
                        type="text"
                        value={product.quantity}
                        className="btn-quantity"
                      />
                      <input
                        type="button"
                        value="+"
                        className="btn-plus btn-cart"
                        onClick={() => {
                          dispatch(addProduct(product.product));
                        }}
                      />
                    </div>
                  </div>
                  <div className="cart-total">
                    <p className="cart-detail-mobile">Total</p>
                    {formatCash(calcPrice(product))} vnd
                  </div>
                  <div className="cart-remove">
                    <p className="cart-detail-mobile">Remove</p>
                    <i
                      className="fa fa-trash"
                      onClick={() => dispatch(deleteProduct(product.product))}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Cart;
