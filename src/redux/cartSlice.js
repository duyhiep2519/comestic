import { createSlice } from "@reduxjs/toolkit";
const sumProduct = (cart) => {
  return cart.reduce((acc, curr) => acc + curr.quantity, 0);
};

const getStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: getStorage,
    sumProduct: sumProduct(getStorage),
  },
  reducers: {
    addProduct: (state, action) => {
      if (state.cart) {
        const check = state.cart.findIndex(
          (item) => item.product._id === action.payload._id
        );
        if (check === -1) {
          state.cart = [
            ...state.cart,
            { product: action.payload, quantity: 1 },
          ];
        } else {
          state.cart.map((item) =>
            item.product._id === action.payload._id
              ? (item.quantity += 1)
              : item
          );
        }
        localStorage.setItem(
          "cart",
          state.cart ? JSON.stringify(state.cart) : []
        );
      }

      state.sumProduct = sumProduct(state.cart);
    },
    addToCart: (state, action) => {
      if (state.cart) {
        const check = state.cart.findIndex(
          (item) => item.product._id === action.payload.product._id
        );
        if (check === -1) {
          state.cart = [
            ...state.cart,
            { product: action.payload.product, quantity: 1 },
          ];
        } else {
          state.cart.map((item) =>
            item.product._id === action.payload.product._id
              ? (item.quantity += action.payload.quantity)
              : item
          );
        }
        localStorage.setItem(
          "cart",
          state.cart ? JSON.stringify(state.cart) : []
        );
      }

      state.sumProduct = sumProduct(state.cart);
    },
    removeProduct: (state, action) => {
      if (state.cart) {
        const check = state.cart.findIndex(
          (item) =>
            item.product._id === action.payload._id && item.quantity >= 2
        );
        if (check > -1) {
          state.cart.map((item) =>
            item.product._id === action.payload._id
              ? (item.quantity -= 1)
              : item
          );
        }
        localStorage.setItem(
          "cart",
          state.cart ? JSON.stringify(state.cart) : []
        );
      }

      state.sumProduct = sumProduct(state.cart);
    },
    deleteProduct: (state, action) => {
      const newCart = state.cart.filter(
        (item) => item.product._id !== action.payload._id
      );
      state.cart = [...newCart];

      localStorage.setItem(
        "cart",
        state.cart ? JSON.stringify(state.cart) : []
      );
      window.location.reload();
    },
  },
});

export const {
  addProduct,
  addToCart,
  removeProduct,
  deleteProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
