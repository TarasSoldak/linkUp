import { RootState } from './store';
import { IProduct } from './reducers/allProductsSlice';
const { createSelector } = require("@reduxjs/toolkit");

const cartSelector = (state:RootState) => state.cart;

export const cartTotalSelector = createSelector([cartSelector], (cart: IProduct[]) =>
  cart.reduce((total, current) => (total += current.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart:IProduct[]) =>
  cart.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  )
);