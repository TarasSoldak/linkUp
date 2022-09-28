import { instance } from './api';
import { IPhotosBanner } from './../store/reducers/photosBannerImgSlice';

export const getPhotosBanner = async () => {
  const response = await instance
  .get<IPhotosBanner[]>(`photos`);
  return response
}