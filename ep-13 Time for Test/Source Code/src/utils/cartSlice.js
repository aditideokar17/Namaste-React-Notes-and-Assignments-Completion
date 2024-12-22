import { createSlice } from "@reduxjs/toolkit";

// slice
const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
        addItem: (state, action) =>{
            state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length = 0;
        }
    }
})

// actions
export const {addItem,removeItem,clearCart} = cartSlice.actions

// reducer
export default cartSlice.reducer;