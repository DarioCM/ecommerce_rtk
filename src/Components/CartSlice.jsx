import { createSlice } from '@reduxjs/toolkit';

// initialising a state for the cart items in the store
const initialState = {
    cartItems: [],
}

const CartSlice = createSlice({

    // name: A string value representing the name of your slice.
    // It's used internally by Redux Toolkit for action type prefixing and other purposes.
    name: 'cart',

    // An object representing the initial state of your slice.
    initialState,

    // An object containing reducer functions. Each key-value pair represents a single reducer,
    // where the key is the name of the action and the value is the reducer function.
    reducers: {

    }

});

