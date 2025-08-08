import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cart/cartSlice.js"
import priceReducer from "./cart/priceSlice.js";
import productReducer from "./cart/productSlice.js";

var store = configureStore({
    reducer:{
        cartState:cartReducer,
        priceState:priceReducer,
        productState:productReducer
    },
});

export default store;