import { IProductDetails } from './../store/reducers/productDetailsSlice';
import { instance } from './api';

export const getProductDetails = async (id:number) => {
  const response = await instance
  .get<IProductDetails>(`products/${id}`);
  return response
}