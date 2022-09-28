import { instance } from './api';

export const getProductsByCategories = async (id:number) => {
  const response = await instance
  .get(`products?CategoryId=${id}`);
  return response
}