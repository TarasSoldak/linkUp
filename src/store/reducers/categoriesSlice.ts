import { getCategories } from './../../api/categoriesApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCategories = createAsyncThunk(
  'singUp/fetchSingUp',
  async (_, thunkAPI) => {
    try {
      const response = await getCategories()
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed with status code 400')
    }
  }
)

export interface ICategories {
  id: number
  name: string
  imageURL: string

}
interface CategoriesState{
  isLoading: boolean
  isError: string
  categories:ICategories[]
}

const initialState: CategoriesState = {
  isLoading: false,
  isError: '',
  categories:[]
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchCategories.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.isError=''
      state.categories = action.payload
    },
    [fetchCategories.rejected.type]: (state, action) => {
      state.isLoading = false
      state.isError = action.payload
    },
    [fetchCategories.pending.type]: (state) => {
      state.isLoading = true
      state.isError=''

    }
  },
})



export default categoriesSlice
