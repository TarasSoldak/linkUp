import { IProduct } from './allProductsSlice';
import { createSlice } from "@reduxjs/toolkit";



const initialState:IProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart:(state,  action )=> {
      const find = state.find((item) => item.id === action.payload);
      if (find) {
        return state.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      } else {
        state.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
    increment(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      );
    },
    clear(state, {payload}) {
      return state.filter(item=>item.id !== payload)
    }
  }
});

export const { addToCart, increment, decrement, clear } = cartSlice.actions;

export default cartSlice;
