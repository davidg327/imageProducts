import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    createProduct: (state, action) => {
      state.products = [action.payload, ...state.products];
    },
  },
});

export const {getProducts, createProduct} = productSlice.actions;
export default productSlice.reducer;
