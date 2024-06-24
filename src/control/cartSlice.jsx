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
    },
});

// console.log(cartSlice);

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;