import  axios  from 'axios';


export const instance = axios.create({
  baseURL: `https://linkup-academy.herokuapp.com/api/v1/`,
  headers: {
    'accept': 'text/plain',
    'Content-Type': 'application/json'
  }
});