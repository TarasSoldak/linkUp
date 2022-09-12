import { IPhotosBanner } from './../store/reducers/photosBannerImgSlice';
import axios from "axios";

export const getPhotosBanner = async () => {
  const response = await axios
  .get<IPhotosBanner[]>(`https://linkup-academy.herokuapp.com/api/v1/photos`);
  return response
}