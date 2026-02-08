import { configureStore } from "@reduxjs/toolkit";
import ProductCartSlice from "./slice/product_cart_slice";
import WishlistSlice from "./slice/wishlist_slice";

export const store = configureStore({
    reducer: {
        productCart: ProductCartSlice,
        wishlist: WishlistSlice,
    },
});


export type RootState = ReturnType<typeof store.getState>; // creating a typescript type representing entire shape of redux state
