import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        isSuccess: false,
        isLoading: false,
        isError: false,
        products: [],
        message: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.isError = false
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isSuccess = false
                state.isLoading = false
                state.isError = true
                state.products = null
                state.message = action.payload
            })
    },

});


export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("FETCH/PRODUCTS", async () => {
    const response = await fetch("https://pizza-hub-qovt.onrender.com/pizza");
    const data = await response.json();
    return data;
});
