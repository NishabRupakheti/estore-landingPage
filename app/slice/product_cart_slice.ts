import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    price: number;
    img: string;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [

    ],
};

const productCartSlice = createSlice({
    name: "productCart",
    initialState: initialState,

    reducers: {
        addItemToCart: (state, action: PayloadAction<CartItem>) => {
            console.log("Adding item to cart:", action.payload);
            const exists = state.items.some(item => item.id === action.payload.id);

            if (!exists) {
                state.items.push(action.payload);
            }
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            console.log("Removing item from cart:", action.payload);
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            console.log("Clearing cart", state);
            state.items = [];
        },
    }
});

export const { addItemToCart, removeItemFromCart, clearCart } = productCartSlice.actions;
export default productCartSlice.reducer;