import { ICategories } from './../store/reducers/categoriesSlice';
import axios from "axios";

export const getCategories = async () => {
  const response = await axios
  .get<ICategories[]>(`https://linkup-academy.herokuapp.com/api/v1/categories`);
  return response
}