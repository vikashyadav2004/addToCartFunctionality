import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk(
  'data/fetchData', 
  async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data;
  }
);
export const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
     
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;  
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;  
        state.data = action.payload;  
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;  
        state.error = action.error.message;  
      });
  },
})
 
// export const { increment, decrement, incrementByAmount } = productSlice.actions 

export default productSlice.reducer