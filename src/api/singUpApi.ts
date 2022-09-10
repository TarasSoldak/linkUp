import { IFormSingUp } from '../pages/singUp/SingUpPage';
import axios from "axios";

export const getSingUp = async (values:IFormSingUp) => {

  const response = await axios
  .post(`https://linkup-academy.herokuapp.com/api/v1/identity/signup`,
  {firstName:values.firstName, lastName:values.lastName,email:values.email,password:values.password}, 
    {headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json'
    }});

  return response
  
}