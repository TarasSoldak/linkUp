import { getLogin } from './../../api/loginApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IFormLogin } from '../../pages/login/LoginPage';

export const fetchLogin = createAsyncThunk(
  'login/fetchLogin',
  async (values: IFormLogin, thunkAPI) => {
    try {
      const response = await getLogin(values)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed with status code 400')
    }
  }
)

interface LoginState {
  isLoading: boolean
  isError: string
  isAuth: boolean
}

const initialState: LoginState = {
  isLoading: false,
  isError: '',
  isAuth: false

}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchLogin.fulfilled.type]: (state) => {
      state.isLoading = false
      state.isError=''
      state.isAuth = true
    },
    [fetchLogin.rejected.type]: (state, action) => {
      state.isLoading = false
      state.isError = action.payload
    },
    [fetchLogin.pending.type]: (state) => {
      state.isLoading = true
      state.isError=''

    }
  },
})

export default loginSlice
