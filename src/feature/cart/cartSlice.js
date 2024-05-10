import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {

        // add to cart
        add: (state, action) => {

            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            )

            if (existingItem) {
                state.cartItems = state.cartItems.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
            } else {
                state.cartItems = [action.payload, ...state.cartItems]
            }
        },

        // remove to cart

        remove: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },

        // increment to cart
        incrementQty: (state, action) => {
            state.cartItems = state.cartItems.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
        },

        // decrement to cart
        decrementQty: (state, action) => {
            state.cartItems = state.cartItems.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item)
        },


        // qty to cart
        qtyprice: (state, action) => {
            state.cartItems = state.cartItems.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty * item.price } : item)
        }

        // Add price 
        

    }
})

export const { add, remove, incrementQty, decrementQty, qtyprice } = cartSlice.actions;
export default cartSlice.reducer;