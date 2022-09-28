import { instance } from './api';
import { IProduct } from './../store/reducers/allProductsSlice';

export const getAllProducts = async (productQuery:string) => {
  const response = await instance
  .get<IProduct[]>
  (`products?Search=${productQuery}`);
  return response
}