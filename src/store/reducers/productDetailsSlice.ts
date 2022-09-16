import { getProductDetails } from './../../api/productDetailsApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProductDetails = createAsyncThunk(
  'product/productDetails',
  async (id:number, thunkAPI) => {
    try {
      const response = await getProductDetails(id)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed with status code 400')
    }
  }
)

export interface IProductDetails {
  id: number
  name: string
  imageURL: string
  price:number
  soldCount:number
  description:string

}
interface ProductDetailsState{
  isLoading: boolean
  isError: string
  productDetails:IProductDetails
}

const initialState: ProductDetailsState = {
  isLoading: false,
  isError: '',
  productDetails:{} as IProductDetails

}

export const productDetailsSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchProductDetails.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.isError=''
      state.productDetails = action.payload
    },
    [fetchProductDetails.rejected.type]: (state, action) => {
      state.isLoading = false
      state.isError = action.payload
    },
    [fetchProductDetails.pending.type]: (state) => {
      state.isLoading = true
      state.isError=''

    }
  },
})



export default productDetailsSlice
