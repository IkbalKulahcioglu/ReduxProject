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
});

// console.log(cartSlice);

export default cartSlice.reducer;