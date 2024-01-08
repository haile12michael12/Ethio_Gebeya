import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

const Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === itemToAdd.id
      );
      if (existingItemIndex !== -1) {
        // Item already in the cart
        state.cart[existingItemIndex].quantity += 1;
        state.cart[existingItemIndex].subtotal =
          state.cart[existingItemIndex].price *
          state.cart[existingItemIndex].quantity;
      } else {
        // Item not in the cart, add it
        state.cart.push({
          ...itemToAdd,
          quantity: 1,
          subtotal: itemToAdd.price,
        });
      }
    },
    removeFromCart: (state, action) => {
      const Cart = JSON.parse(JSON.stringify(state.cart));
      const removedcart = Cart.filter((item) => item.id !== action.payload);
      state.cart = removedcart;
    },
    increaseQuantity: (state, action) => {
      const Cart = JSON.parse(JSON.stringify(state.cart));
      const product = Cart.find((item) => item.id === action.payload);
      product.quantity++;
      product.subtotal = product.price * product.quantity;
      state.cart = Cart;
    },
    decreaseQuantity: (state, action) => {
      const Cart = JSON.parse(JSON.stringify(state.cart));
      const product = Cart.find((item) => item.id === action.payload);
      if (product.quantity > 1) {
        product.quantity--;
      }
      product.subtotal = product.price * product.quantity;
      state.cart = Cart;
    },
    ClearCart: (state, action) => {
      state.cart = [];
    },

    alltotal: (state, action) => {
      const Cart = JSON.parse(JSON.stringify(state.cart));
      const total = Cart.reduce((acc, item) => {
        return acc + item.subtotal;
      }, 0);
      state.cart = Cart;
      state.total = total;
    },
  },
});

export const {
  addtoCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  ClearCart,
  alltotal,
} = Cartslice.actions;
export default Cartslice.reducer;
