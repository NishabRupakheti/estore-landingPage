import { createSlice } from "@reduxjs/toolkit";

interface WishlistItem {
    id: number;
    name: string;
    price: number;
    img: string;
    discount?: number;
    originalPrice: number;
}

interface WishlistState {
    items: WishlistItem[];
}

const initialState: WishlistState = {
    items: [

    ],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: initialState,
    reducers: {
        addToWishlist: (state, action) => {
            console.log("Adding item to wishlist:", action.payload);
            if (!state.items.find(item => item.id === action.payload.id)) {
                state.items.push(action.payload);
            }

        },
        removeFromWishlist: (state, action) => {
            console.log("Removing item from wishlist:", action.payload);
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearWishlist: (state) => {
            window.alert("Moved all items to bag");
            state.items = [];
        },
    }
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
