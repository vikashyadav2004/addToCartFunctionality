import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: JSON.parse(localStorage.getItem("cartProducts")) ? JSON.parse(localStorage.getItem("cartProducts")):[],
  },
  reducers: {
    addValue: (state, action) => {
      state.value.push({ ...action.payload, itemQuantity: 1 });
      localStorage.setItem("cartProducts",JSON.stringify(state.value))
    },
    deleteValue: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartProducts",JSON.stringify(state.value))
    },
    Increase: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        const item = state.value[itemIndex];
        if (item.stock > item.itemQuantity) {
          state.value[itemIndex] = {
            ...item,
            itemQuantity: item.itemQuantity + 1,
            
          };
          localStorage.setItem("cartProducts",JSON.stringify(state.value))
        }
      }
    },
    Decrease: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        const item = state.value[itemIndex];
        if (item.itemQuantity > 1) {
          state.value[itemIndex] = {
            ...item,
            itemQuantity: item.itemQuantity - 1,
            
          };
          localStorage.setItem("cartProducts",JSON.stringify(state.value))
        }
      }
    },
    Delete: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartProducts",JSON.stringify(state.value))
    },
    DeleteAll: (state, action) => {
      state.value = [];
      localStorage.removeItem("cartProducts")
    },
  },
}); 
export const { addValue, deleteValue, Increase,Decrease,Delete,DeleteAll} = counterSlice.actions;

export default counterSlice.reducer;
