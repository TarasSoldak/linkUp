import { getAllProducts } from './../../api/allProductsApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAllProducts = createAsyncThunk(
  'allProducts/products',
  async (productQuery:string, thunkAPI) => {
    try {
      const response = await getAllProducts(productQuery)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed with status code 400')
    }
  }
)

export interface IProduct {
  id: number
  name: string
  imageURL: string
  price: number
  soldCount: number
  quantity:number

}
interface AllProductsState {
  isLoading: boolean
  isError: string
  productQuery: string
  items: IProduct[]
}

const initialState: AllProductsState = {
  isLoading: false,
  isError: '',
  productQuery: '',
  items: []
}

export const allProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductQuery: (state, action) => {
      state.productQuery = action.payload
    },
  

  },
  extraReducers: {
    [fetchAllProducts.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.isError = ''
      state.items = action.payload.items
    },
    [fetchAllProducts.rejected.type]: (state, action) => {
      state.isLoading = false
      state.isError = action.payload
    },
    [fetchAllProducts.pending.type]: (state) => {
      state.isLoading = true
      state.isError = ''

    }
  },
})


export const { setProductQuery} = allProductsSlice.actions
export default allProductsSlice
