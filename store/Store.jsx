import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../reducer/counterSlice"
import productSlice from "../reducer/ProductSlice"
import cartSlice from "../reducer/cartSlice.js"
export default configureStore({
  reducer: {
    counter: counterReducer,
    products:productSlice,
    cart:cartSlice
  }
})