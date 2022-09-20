import { productsByCategoriesSlice } from './reducers/productsByCategoriesSlice';
import { productDetailsSlice } from './reducers/productDetailsSlice';
import { allProductsSlice } from './reducers/allProductsSlice';
import { categoriesSlice } from './reducers/categoriesSlice';
import { photosBannerSlice } from './reducers/photosBannerImgSlice';
import { loginSlice } from './reducers/loginSlice';
import { singUpSlice } from './reducers/singUpSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducers/cartSlice';
import openCartSlice from './reducers/openCartSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  singUp: singUpSlice.reducer,
  login: loginSlice.reducer,
  photosBanner: photosBannerSlice.reducer,
  categories: categoriesSlice.reducer,
  allProducts: allProductsSlice.reducer,
  product: productDetailsSlice.reducer,
  cart: cartSlice.reducer,
  cartOpen: openCartSlice.reducer,
  byCategories: productsByCategoriesSlice.reducer
})
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'cart', 'product']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch