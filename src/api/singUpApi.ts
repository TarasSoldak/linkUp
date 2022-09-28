import { IFormSingUp } from '../pages/singUp/SingUpPage';
import { instance } from './api';

export const getSingUp = async (values:IFormSingUp) => {

  const response = await instance
  .post(`identity/signup`,{...values},);

  return response
  
}