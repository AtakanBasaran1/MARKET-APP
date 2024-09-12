import { configureStore } from '@reduxjs/toolkit'
import categorySlice from '../[redux]/categorySlice'
import productSlice from '../[redux]/productSlice'
import basketReducer from '../[redux]/basketSlice';
export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice,
        basket: basketReducer,
    },
})