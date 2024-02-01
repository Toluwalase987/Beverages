import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //Payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //Payload = itemId
      state.cart = state.cart.filter((item) => {
        return item.title !== action.payload;
      });
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => {
        item.title === action.payload;
      });
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => {
        item.id === action.payload;
      });
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
    },
    clearCart(state, action) {
        state.cart = []
    },
  },
});

 export const {addItem, deleteItem, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions;
 export default cartSlice.reducer
 export const getTotalCartQuantity = (state) => {
    return state.cart.cart.reduce((sum, item)=> sum + item.qtyInCart, 0)
  }
 export const getTotalCartPrice = (state) => {
    return state.cart.cart.reduce((sum, item)=> sum + item.price, 0)
  }
export const getCart = (state) => state.cart.cart;