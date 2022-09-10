import { getSingUp } from './../../api/singUpApi';
import { IFormSingUp } from './../../pages/singUp/SingUpPage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSingUp = createAsyncThunk(
  'singUp/fetchSingUp',
  async (values: IFormSingUp, thunkAPI) => {
    try {
      const response = await getSingUp(values)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed with status code 400')
    }
  }
)

interface SingUpState {
  isLoading: boolean
  isError: string
  success:boolean

}

const initialState: SingUpState = {
  isLoading: false,
  isError: '',
  success:false
}

export const singUpSlice = createSlice({
  name: 'singUp',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchSingUp.fulfilled.type]: (state) => {
      state.isLoading = false
      state.isError=''
      state.success=true
    },
    [fetchSingUp.rejected.type]: (state, action) => {
      state.isLoading = false
      state.isError = action.payload
    },
    [fetchSingUp.pending.type]: (state) => {
      state.isLoading = true
      state.isError=''

    }
  },
})



export default singUpSlice
