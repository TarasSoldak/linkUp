import { IProduct } from './allProductsSlice';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProductsByCategories } from '../../api/productsByCategoriesApi';

export const fetchProductsByCategories = createAsyncThunk(
  'productsByCategories/fetchProductsByCategories',
  async (id:number, thunkAPI) => {
    try {
      const response = await getProductsByCategories(id)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed with status code 400')
    }
  }
)


interface AllProductsState {
  loading: boolean
  error: string
  itemsByCategories: IProduct[]
}

const initialState: AllProductsState = {
  loading: false,
  error: '',
  itemsByCategories: []
}

export const productsByCategoriesSlice = createSlice({
  name: 'byCategories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProductsByCategories.fulfilled.type]: (state, action) => {
      state.loading = false
      state.error = ''
      state.itemsByCategories = action.payload.items
    },
    [fetchProductsByCategories.rejected.type]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    [fetchProductsByCategories.pending.type]: (state) => {
      state.loading = true
      state.error = ''

    }
  },
})


export default fetchProductsByCategories
