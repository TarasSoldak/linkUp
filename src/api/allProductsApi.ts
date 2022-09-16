import { IProduct } from './../store/reducers/allProductsSlice';
import axios from "axios";

export const getAllProducts = async () => {
  const response = await axios
  .get<IProduct[]>(`https://linkup-academy.herokuapp.com/api/v1/products`);
  return response
}