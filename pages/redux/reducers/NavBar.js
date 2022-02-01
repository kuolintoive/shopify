import { createSlice } from "@reduxjs/toolkit";

export const navBarSlice = createSlice({
    name: 'navBar',
    initialState: {
        category: {
            selected: 'Categories'
        },
        currency: 'USD $'
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.category.selected = action.payload;
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
        }
    }
})

export const { setSelectedCategory, setCurrency } = navBarSlice.actions;
export default navBarSlice.reducer;