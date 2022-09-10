import { IFormLogin } from './../pages/login/LoginPage';
import axios from "axios";

export const getLogin = async (values:IFormLogin) => {

  const response = await axios
  .post(`https://linkup-academy.herokuapp.com/api/v1/identity/signin`,
  {email:values.email, password:values.password}, 
    {headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json'
    }});

  return response
  
}