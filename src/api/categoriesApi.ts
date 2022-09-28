import { instance } from './api';
import { ICategories } from './../store/reducers/categoriesSlice';

export const getCategories = async () => {
  const response = await instance
  .get<ICategories[]>(`categories`);
  return response
}