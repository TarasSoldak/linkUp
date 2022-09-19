import { createSlice } from "@reduxjs/toolkit";


interface IOpenCartState{
  openCart:boolean
}
const initialState:IOpenCartState={
openCart:false
}

const openCartSlice = createSlice({
  name: "openCart",
  initialState,
  reducers: {
    setOpenCart:(state, {payload})=>{
      state.openCart=payload
    }
}
})
export const {setOpenCart } = openCartSlice.actions;

export default openCartSlice;
