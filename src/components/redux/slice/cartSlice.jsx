import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  addedToCart: false,
  quantity: 1
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //Payload = newItem
      state.cart.push(action.payload),
      state.addedToCart = true;
    },
    deleteItem(state, action) {
      //Payload = itemId
      state.cart = state.cart.filter((item) => {
        return item.title !== action.payload;
      });
      state.addedToCart = false
    },
    increaseQuantity(state, action) {
        const item = state.cart.find((item) => item.title === action.payload);
        if (item) {
          item.quantity++;
          item.price = item.currentPrice * item.quantity;
        }
      },
      decreaseQuantity(state, action) {
        const item = state.cart.find((item) => item.title === action.payload);
        if (item && state.quantity > 0) {
          item.quantity--;
          item.price = item.currentPrice * item.quantity;
        }
      },      
    clearCart(state, action) {
        state.cart = []
    },
  },
});

 export const {addItem, deleteItem, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions;
 export default cartSlice.reducer
 export const getTotalCartQuantity = (state) => {
    return state.cart.cart.reduce((sum, item)=> sum + item.quantity, 0)
  }
 export const getTotalCartPrice = (state) => {
    return state.cart.cart.reduce((sum, item)=> sum + item.price, 0)
  }
export const getCart = (state) => state.cart.cart;
export const getQuantity = (state) => state.cart.quantity;
export const getAddedStatus = (state) => state.cart.addedToCart;
