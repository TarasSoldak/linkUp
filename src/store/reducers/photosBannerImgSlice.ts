import { getPhotosBanner } from './../../api/bannerImgApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPhotosBanner = createAsyncThunk(
  'photosBanner/fetchPhotosBanner',
  async (_, thunkAPI) => {
    try {
      const response = await getPhotosBanner()
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed with status code 400')
    }
  }
)

export interface IPhotosBanner {
    id: number,
    imageURL: string 
}
interface PhotosBannerState {
  isLoading: boolean,
  isError: string,
  photos:IPhotosBanner[]

}

const initialState: PhotosBannerState = {
  isLoading: false,
  isError: '',
  photos:[]

}

export const photosBannerSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPhotosBanner.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.isError=''
      state.photos = action.payload
    },
    [fetchPhotosBanner.rejected.type]: (state, action) => {
      state.isLoading = false
      state.isError = action.payload
    },
    [fetchPhotosBanner.pending.type]: (state) => {
      state.isLoading = true
      state.isError=''
    }
  },
})

export default photosBannerSlice
