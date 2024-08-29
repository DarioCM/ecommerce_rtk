import { createSlice } from '@reduxjs/toolkit';

// initialising a state for the cart items in the store
const initialState = {
    cartItems: [],
    disabledProducts: [],
    superCoins : 0,
};

const CartSlice = createSlice({

    // name: A string value representing the name of your slice.
    // It's used internally by Redux Toolkit for action type prefixing and other purposes.
    name: 'cart',

    // An object representing the initial state of your slice.
    initialState,

    // An object containing reducer functions. Each key-value pair represents a single reducer,
    // where the key is the name of the action and the value is the reducer function.
    reducers: {

        // This reducer function handles the action of adding an item to the cart.
        addItemToCart (state, action) {
            // Check if the item is already in the cart
            const existingItem = state.cartItems.find( item => item.id === action.payload.id);
            if (existingItem) {
                // If the item is already in the cart, increment the quantity
                existingItem.quantity++;
            } else {
                // If the item is not in the cart, add it
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },

        //  This reducer function handles the action of removing an item from the cart.
        removeItemFromCart(state, action) {
            // It updates the cartItems array by filtering out the item with the ID provided in the action payload
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },

        //  This reducer function handles the action of clearing the entire cart.
        clearCart(state) {
            state.cartItems = [];
            state.disabledProducts = [];
        },

        // This reducer function handles the action of increasing the quantity of a specific item in the cart.
        increaseItemQuantity(state, action) {
            // Find the item in the cart
           const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity++;
            }
       },

        //  This reducer function handles the action of decreasing the quantity of a specific item in the cart.
        // action: Similar to the previous function, it’s an object describing the action being performed.
        // It’s expected to have a type property indicating the action type and may include additional data needed to carry out the action.
        // Here, action.payload likely holds the identifier (id) of the item whose quantity needs to be decreased.
        decreaseItemQuantity(state, action) {
            // Find the item in the cart
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1 ) {
                itemToDecrease.quantity--;
            }
        },



    }

});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;