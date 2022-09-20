import axios from "axios";

export const getProductsByCategories = async (id:number) => {
  const response = await axios
  .get(`https://linkup-academy.herokuapp.com/api/v1/products?CategoryId=${id}`);
  return response
}