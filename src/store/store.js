import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cart/cartSlice.js"

var store = configureStore({
    reducer:{
        cartState:cartReducer,
    },
});

export default store;