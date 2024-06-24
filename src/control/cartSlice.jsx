import {createSlice} from '@reduxjs/toolkit'
import muffinItems from '../muffinItems'

const initialState = {
    cartItems: muffinItems,
    quantity: 1,
    total: 0,
};
 
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state) => {
            state.cartItems= [];
        },
        removeItem:(state, action) => {
            const itemId= action.payload;
            state.cartItems = state.cartItems.filter((item ) => item.id !== itemId)
        }
    },
});

// console.log(cartSlice);

export const { clearCart,removeItem } = cartSlice.actions;


export default cartSlice.reducer;