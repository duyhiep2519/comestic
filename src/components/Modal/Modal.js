import React, { useState } from "react";
import "./Modal.css";
import { Slide } from "components";
import { addToCart } from "redux/cartSlice";
import { useDispatch } from "react-redux";

const Modal = (props) => {
  const show = props.active;
  const product = props.product;

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  return (
    <>
      {show && (
        <div className="modal">
          {props.children}
          <div className="modal-container row">
            <div className="modal-img col l-6 m-6 c-12">
              <Slide image={product.image} />
            </div>
            <div className="modal-content col l-6 m-6 c-12">
              <div className="modal-title">{product.name}</div>
              <div className="modal-body">
                <div className="modal-description">{product.description}</div>
                <div className="cart-quantity">
                  <div className="cart-quantity-btn">
                    <span style={{ color: "#333" }}>Quantity: </span>
                    <input
                      type="button"
                      value="-"
                      className="btn-minus btn-cart"
                      onClick={() => {
                        if (quantity > 0) {
                          setQuantity(quantity - 1);
                        }
                      }}
                    />
                    <input
                      type="text"
                      value={quantity}
                      className="btn-quantity"
                    />
                    <input
                      type="button"
                      value="+"
                      className="btn-plus btn-cart"
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="add-to-cart-btn"
                  onClick={() => {
                    if (quantity > 0) {
                      dispatch(
                        addToCart({ product: product, quantity: quantity })
                      );
                    }
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
