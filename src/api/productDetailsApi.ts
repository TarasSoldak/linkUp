import { IProductDetails } from './../store/reducers/productDetailsSlice';
import axios from "axios";

export const getProductDetails = async (id:number) => {
  const response = await axios
  .get<IProductDetails>(`https://linkup-academy.herokuapp.com/api/v1/products/${id}`);
  return response
}