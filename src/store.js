// Import configureStore and Reducer from Redux Toolkit in the store.js file.
import { configureStore }  from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';

// Create a store using the configureStore function from Redux Toolkit.
const store = configureStore(
    {
        reducer:  {
            cart : cartReducer,

        },
    }
);

export default store;