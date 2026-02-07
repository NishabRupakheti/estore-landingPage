import { configureStore } from "@reduxjs/toolkit";
import ProductCartSlice from "./slice/product_cart_slice";

export const store = configureStore({
    reducer: {
        productCart: ProductCartSlice,
    },
});

