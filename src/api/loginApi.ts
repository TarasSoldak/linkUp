import { IFormLogin } from './../pages/login/LoginPage';
import { instance } from './api';

export const getLogin = async (values:IFormLogin) => {
  const response = await instance
  .post(`identity/signin`,{...values});
  return response
  
}