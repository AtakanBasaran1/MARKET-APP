import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    products: [],

};

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
});

export const getCategoryProducts = createAsyncThunk('products/getCategory', async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    return data;
});


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
    }
});

export default productSlice.reducer;
