import { IProduct } from './../store/reducers/allProductsSlice';
import axios from "axios";

export const getAllProducts = async (productQuery:string) => {
  const response = await axios
  .get<IProduct[]>
  (`https://linkup-academy.herokuapp.com/api/v1/products?Search=${productQuery}`);
  return response
}