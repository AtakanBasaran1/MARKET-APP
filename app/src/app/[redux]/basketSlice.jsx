import { createSlice } from '@reduxjs/toolkit';

const getBasketFromStorage = () => {
    const basket = localStorage.getItem("basket");
    return basket ? JSON.parse(basket) : [];
}

const initialState = {
    products: getBasketFromStorage(),
    totalAmount: 0
};

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products.find((product) => product.id === action.payload.id);

            if (findProduct) {
                // ürün zaten varsa miktarı güncelle
                const extractedProducts = state.products.filter((product) => product.id !== action.payload.id);

                findProduct.count += action.payload.count;

                state.products = [...extractedProducts, findProduct];
            } else {
                state.products.push(action.payload);
            }
            writeFromBasketToStorage(state.products);
        },

        removeFromBasket: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id);
            writeFromBasketToStorage(state.products);
        },

        calculateBasket: (state) => {
            state.totalAmount = state.products.reduce((total, product) => total + product.price * product.count, 0);
        }
    }
});

export const { addToBasket, removeFromBasket, calculateBasket } = basketSlice.actions;
export default basketSlice.reducer;
