import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    price: number;
    img: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [
        {
            id: 1,
            name: "TV",
            price: 50,
            img: "/app/images/TV.png",
            quantity: 1,
        }
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
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            console.log("Removing item from cart:", action.payload);
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity = Math.max(1, action.payload.quantity);
            }
        },
        clearCart: (state) => {
            console.log("Clearing cart", state);
            state.items = [];
        },
    }
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = productCartSlice.actions;
export default productCartSlice.reducer;