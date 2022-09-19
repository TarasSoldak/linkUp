import { productDetailsSlice } from './reducers/productDetailsSlice';
import { allProductsSlice } from './reducers/allProductsSlice';
import { categoriesSlice } from './reducers/categoriesSlice';
import { photosBannerSlice } from './reducers/photosBannerImgSlice';
import { loginSlice } from './reducers/loginSlice';
import { singUpSlice } from './reducers/singUpSlice';
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducers/cartSlice';
import openCartSlice from './reducers/openCartSlice';

export const store = configureStore({
  reducer: {
   singUp:singUpSlice.reducer,
   login:loginSlice.reducer,
   photosBanner:photosBannerSlice.reducer,
   categories:categoriesSlice.reducer,
   allProducts:allProductsSlice.reducer,
   product:productDetailsSlice.reducer,
   cart:cartSlice.reducer,
   cartOpen:openCartSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch